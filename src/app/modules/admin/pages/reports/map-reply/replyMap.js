import React, {useState, useEffect, useRef, useCallback} from 'react'
import {IconButton, Paper, Slider, Toolbar, Typography} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TuneIcon from '@mui/icons-material/Tune'
import DownloadIcon from '@mui/icons-material/Download'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {usePreference} from '../../../../../../_metronic/helpers/common/util/preferences'
import {useCatch} from '../../../../../../reactHelper'
import MapView from '../../../../apps/map/core/MapView'
import MapRoutePoints from '../../../../apps/map/MapRoutePoints'
import MapPositions from '../../../../apps/map/MapPositions'
import MapGeofence from '../../../../apps/map/MapGeofence'
import MapRoutePath from '../../../../apps/map/MapRoutePath'
import MapCamera from '../../../../apps/map/MapCamera'
import {formatTime} from '../../../../../../_metronic/helpers/common/util/formatter'
import ReportFilter from './ReportFilter'
import StatusCard from '../../../../../../_metronic/helpers/common/components/StatusCard'
import {useTranslation} from '../../../../../../_metronic/helpers/common/components/LocalizationProvider'
import {devicesActions} from '../../../../../../store'
import {useEffectAsync} from '../../../../../../reactHelper'
import {useDispatch} from 'react-redux'
import {layoutManagerActions} from '../../../../../../store'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position:'relative'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 3,
    //  right: 0,
    // top: '15%',
    top: '6%',
    // margin: theme.spacing(1.5),
    width: theme.dimensions.drawerWidthDesktop,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: 0,
    },
  },
  title: {
    flexGrow: 1,
  },
  slider: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formControlLabel: {
    height: '100%',
    width: '100%',
    paddingRight: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    // padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1),
    },
  },
}))

const ReplayMap = () => {
  const dispatch = useDispatch()
  const t = useTranslation()
  const classes = useStyles()
  const navigate = useNavigate()
  const timerRef = useRef()

  const hours12 = usePreference('twelveHourFormat')

  const defaultDeviceId = useSelector((state) => state.devices.selectedId)

  const [positions, setPositions] = useState([])
  const [index, setIndex] = useState(0)
  const [selectedDeviceId, setSelectedDeviceId] = useState(defaultDeviceId)
  const [showCard, setShowCard] = useState(false)
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [expanded, setExpanded] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const deviceName = useSelector((state) => {
    if (selectedDeviceId) {
      const device = state.devices.items[selectedDeviceId]
      if (device) {
        return device.name
      }
    }
    return null
  })
  useEffectAsync(async () => {
    let email = 'test@test.test'
    let password = 'test'
    const auth = btoa(`${email}:${password}`)
    const response = await fetch(`${process.env.REACT_APP_TRUCKGPS_API_URL}/devices`, {
      credentials: 'include',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
    if (response.ok) {
      dispatch(devicesActions.refresh(await response.json()))
    } else {
      throw Error(await response.text())
    }
  }, [])
  useEffect(() => {
    if (playing && positions.length > 0) {
      timerRef.current = setInterval(() => {
        setIndex((index) => index + 1)
      }, 500)
    } else {
      clearInterval(timerRef.current)
    }

    return () => clearInterval(timerRef.current)
  }, [playing, positions])

  useEffect(() => {
    if (index >= positions.length - 1) {
      clearInterval(timerRef.current)
      setPlaying(false)
    }
  }, [index, positions])

  const onPointClick = useCallback(
    (_, index) => {
      setIndex(index)
    },
    [setIndex]
  )

  const onMarkerClick = useCallback(
    (positionId) => {
      setShowCard(!!positionId)
    },
    [setShowCard]
  )

  const handleSubmit = useCatch(async ({deviceId, from, to}) => {
    setLoading(true)
    setSelectedDeviceId(deviceId)
    setFrom(from)
    setTo(to)
    const query = new URLSearchParams({deviceId, from, to})
    const response = await fetch(`/api/positions?${query.toString()}`)
    if (response.ok) {
      setLoading(false)
      setIndex(0)
      const positions = await response.json()
      setPositions(positions)
      if (positions.length) {
        setExpanded(false)
      } else {
        throw Error(t('sharedNoData'))
      }
    } else {
      setLoading(false)
      throw Error(await response.text())
    }
  })

  const handleDownload = () => {
    const query = new URLSearchParams({deviceId: selectedDeviceId, from, to})
    window.location.assign(`/api/positions/kml?${query.toString()}`)
  }
  useEffect(() => {
    dispatch(layoutManagerActions.setToolbar(false))
    return () => {
      dispatch(layoutManagerActions.setToolbar(true))
    }
  }, [])
  return (
    <div className={classes.root}>
      <MapView>
        <MapGeofence />
        <MapRoutePath positions={positions} />
        <MapRoutePoints positions={positions} onClick={onPointClick} />
        {index < positions.length && (
          <MapPositions
            positions={[positions[index]]}
            onClick={onMarkerClick}
            titleField='fixTime'
          />
        )}
      </MapView>
      <MapCamera positions={positions} />
     
        {/* <Paper elevation={3} square>
          <Toolbar>
            <IconButton edge="start" sx={{ mr: 2 }} onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>{t('reportReplay')}</Typography>
            {!expanded && (
              <>
                <IconButton onClick={handleDownload}>
                  <DownloadIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => setExpanded(true)}>
                  <TuneIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </Paper> */}
        <Paper className='w-100'  style={{position:'absolute', top:'0'}}>
        {!expanded ? (
            <>
              <Typography variant='subtitle1' align='center'>
                {deviceName}
              </Typography>
              <Slider
                className={classes.slider}
                max={positions.length - 1}
                step={null}
                marks={positions.map((_, index) => ({value: index}))}
                value={index}
                onChange={(_, index) => setIndex(index)}
              />
              <div className={classes.controls}>
                {`${index + 1}/${positions.length}`}
                <IconButton
                  onClick={() => setIndex((index) => index - 1)}
                  disabled={playing || index <= 0}
                >
                  <FastRewindIcon />
                </IconButton>
                <IconButton
                  onClick={() => setPlaying(!playing)}
                  disabled={index >= positions.length - 1}
                >
                  {playing ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <IconButton
                  onClick={() => setIndex((index) => index + 1)}
                  disabled={playing || index >= positions.length - 1}
                >
                  <FastForwardIcon />
                </IconButton>
                {formatTime(positions[index].fixTime, 'seconds', hours12)}
              </div>
            </>
          ) : (
            <ReportFilter handleSubmit={handleSubmit} fullScreen showOnly loading={loading} />
          )}
  
          
        </Paper>
      
      {showCard && index < positions.length && (
        <StatusCard
          deviceId={selectedDeviceId}
          position={positions[index]}
          onClose={() => setShowCard(false)}
          disableActions
        />
      )}
    </div>
  )
}

export default ReplayMap
