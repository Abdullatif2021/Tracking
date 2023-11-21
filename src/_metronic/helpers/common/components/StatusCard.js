import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Draggable from 'react-draggable'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Menu,
  MenuItem,
  CardMedia,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import CloseIcon from '@mui/icons-material/Close'
import ReplayIcon from '@mui/icons-material/Replay'
import PublishIcon from '@mui/icons-material/Publish'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import PendingIcon from '@mui/icons-material/Pending'

//import { useTranslation } from './LocalizationProvider';
import RemoveDialog from './RemoveDialog'
import PositionValue from './PositionValue'
import { useDeviceReadonly } from '../util/permissions'
import usePositionAttributes from '../attributes/usePositionAttributes'

import { useAttributePreference } from '../util/preferences'
import { useCatch, useCatchCallback } from '../../../../reactHelper'
import { devicesActions } from '../../../../store'
import { amber, grey, green, indigo, red, common } from '@mui/material/colors'
import { useTranslation } from './LocalizationProvider'
import { MapCarPath } from '../../../../app/modules/admin/pages/stations/routes/RoutesNames'
const useStyles = makeStyles((theme) => ({
  card: {
    pointerEvents: 'auto',
    width: theme.dimensions.popupMaxWidth,
  },
  media: {
    height: theme.dimensions.popupImageHeight,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  mediaButton: {
    color: theme.palette.colors.white,
    mixBlendMode: 'difference',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 1, 0, 2),
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  negative: {
    color: theme.palette.colors.negative,
  },
  icon: {
    width: '25px',
    height: '25px',
    filter: 'brightness(0) invert(1)',
  },
  table: {
    '& .MuiTableCell-sizeSmall': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  cell: {
    borderBottom: 'none',
  },
  actions: {
    justifyContent: 'space-between',
  },
  root: ({ desktopPadding }) => ({
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 5,
    right: '2%',
    bottom: '50%',
    [theme.breakpoints.up('md')]: {
      left: `calc(50% + ${desktopPadding} / 2)`,
      //  bottom: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      left: '50%',
      bottom: '50%', // `calc(${theme.spacing(3)} + ${theme.dimensions.bottomBarHeight}px)`,
    },
    transform: 'translateX(-50%)',
  }),
}))

const StatusRow = ({ name, content }) => {
  const classes = useStyles()
  return (
    <TableRow>
      <TableCell className={classes.cell}>
        <Typography variant='body2'>{name}</Typography>
      </TableCell>
      <TableCell className={classes.cell}>
        <Typography variant='body2' color='textSecondary'>
          {content}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

const StatusCard = ({ deviceId, position, onClose, desktopPadding = 0, ...props }) => {
  const { permissions, ishow } = props;
  const classes = useStyles({ desktopPadding })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const t = useTranslation()

  const deviceReadonly = useDeviceReadonly()

  const device = useSelector((state) => state.devices.items[deviceId])

  const deviceImage = device?.attributes?.deviceImage

  const positionAttributes = usePositionAttributes(t)
  const positionItems = useAttributePreference(
    'positionItems',
    'speed,address,totalDistance,course'
  )

  const [anchorEl, setAnchorEl] = useState(null)

  const [removing, setRemoving] = useState(false)

  const handleRemove = useCatch(async (removed) => {
    /* if (removed) {
      const response = await fetch('/api/devices');
      if (response.ok) {
        dispatch(devicesActions.refresh(await response.json()));
      } else {
        throw Error(await response.text());
      }
    }*/
    setRemoving(false)
  })

  const handleGeofence = useCatchCallback(async () => {
    const newItem = {
      name: '',
      area: `CIRCLE (${position.latitude} ${position.longitude}, 50)`,
    }
    const response = await fetch('/api/geofences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
    if (response.ok) {
      const item = await response.json()
      const permissionResponse = await fetch('/api/permissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId: position.deviceId, geofenceId: item.id }),
      })
      if (!permissionResponse.ok) {
        throw Error(await permissionResponse.text())
      }
      navigate(`/settings/geofence/${item.id}`)
    } else {
      throw Error(await response.text())
    }
  }, [navigate, position])

  return (
    <>
      <div className={classes.root}>
        {device && (
          <Draggable handle={`.${classes.media}, .${classes.header}`}>
            <Card elevation={3} className={classes.card}>
              {deviceImage ? (
                <CardMedia
                  className={classes.media}
                  image={`/api/media/${device.uniqueId}/${deviceImage}`}
                >
                  <IconButton size='small' onClick={onClose} onTouchStart={onClose}>
                    <CloseIcon fontSize='small' className={classes.mediaButton} />
                  </IconButton>
                </CardMedia>
              ) : (
                <div className={classes.header}>
                  <Typography variant='body2' color='textSecondary'>
                    {device.name}
                  </Typography>
                  <IconButton size='small' onClick={onClose} onTouchStart={onClose}>
                    <CloseIcon fontSize='small' />
                  </IconButton>
                </div>
              )}
              {position && (
                <CardContent className={classes.content}>
                  <Table size='small' classes={{ root: classes.table }}>
                    <TableBody>
                      {positionItems
                        .split(',')
                        .filter(
                          (key) =>
                            (position.hasOwnProperty(key) || position.attributes.hasOwnProperty(key)) && key != 'course'
                        )
                        .map((key) => (
                          <StatusRow
                            key={key}
                            name={
                              positionAttributes.hasOwnProperty(key)
                                ? positionAttributes[key].name
                                : key
                            }
                            content={
                              <PositionValue
                                position={position}
                                property={position.hasOwnProperty(key) ? key : null}
                                attribute={position.hasOwnProperty(key) ? null : key}
                              />
                            }
                          />
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              )}
              {
                <CardActions classes={{ root: classes.actions }} disableSpacing>
                  <IconButton
                    color='secondary'
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    disabled={!position}
                  >
                    <PendingIcon />
                  </IconButton>
                </CardActions>
              }
            </Card>
          </Draggable>
        )}
      </div>
      {position && (
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
          {(!ishow && permissions != undefined) && <MenuItem disabled={!permissions?.map(x => x.code).includes('View_Vehicle_Account')} onClick={() => {
            navigate(MapCarPath, { state: deviceId })
          }}>{'Move To Car'}</MenuItem>}


          <MenuItem onClick={() => navigate(`/position/${position.id}`)}>
            <Typography color='secondary'>{'sharedShowDetails'}</Typography>
          </MenuItem>
          <MenuItem onClick={handleGeofence}>{'sharedCreateGeofence'}</MenuItem>
          <MenuItem
            component='a'
            target='_blank'
            href={`https://www.google.com/maps/search/?api=1&query=${position.latitude}%2C${position.longitude}`}
          >
            {'linkGoogleMaps'}
          </MenuItem>
          <MenuItem
            component='a'
            target='_blank'
            href={`http://maps.apple.com/?ll=${position.latitude},${position.longitude}`}
          >
            {'linkAppleMaps'}
          </MenuItem>
          <MenuItem
            component='a'
            target='_blank'
            href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${position.latitude}%2C${position.longitude}&heading=${position.course}`}
          >
            {'linkStreetView'}
          </MenuItem>
        </Menu>
      )}
      <RemoveDialog
        open={removing}
        endpoint='devices'
        itemId={deviceId}
        onResult={(removed) => handleRemove(removed)}
      />
    </>
  )
}

export default StatusCard
