/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import {Outlet, Link, useNavigate, useLocation} from 'react-router-dom'
import {Header} from './components/header'
import {Sidebar} from './components/sidebar'
import './index.css'
import Advertisement from './pages/advertisment'
import {useDispatch, useSelector} from 'react-redux'
import {LinearProgress} from '@mui/material'
import {adsManagerActions, terminalPathsActions} from '../../../store'
import {truckPathActions} from '../../../store'
import SocketController from './SocketController'
import {GetCurrentDevice, GetCurrentTerminal, GetPageTimes} from '../../../services/traccargps'
import {Footer} from './components/footer'

const TerminalLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loading = useSelector((state: any) => state.terminalPath.loading)
  const checkArriveTerminal = useSelector((state: any) => state.terminalPath.checkArriveTerminal)
  const devicesStatus = useSelector((state: any) => state.terminalPath.devicesStatus)
 // const [showAds, setShowAds] = useState(false)
  const showAds = useSelector((state: any) => state.adsManager?.showAds)
  const location = useLocation()
  const id: any = location.state

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowAds(true)
  //   }, 5000)
  // }, [])
  //start auth
  useEffect(() => {
    dispatch(GetCurrentTerminal(id)).then((res) => {
      if (res.type == 'terminal/fulfilled') {
        if (res.payload.length > 0) {
          dispatch(
            terminalPathsActions.setDevices({
              devices: res?.payload[0].devices,
              terminal: res?.payload[0].terminal,
              next_terminal: res?.payload[0]?.next_terminal,
            })
          )
          dispatch(adsManagerActions.setAds(res?.payload[0]?.ads))
        } else {
          dispatch(
            terminalPathsActions.setDevices({
              devices: [],
              terminal: [],
            })
          )
          dispatch(adsManagerActions.setAds([]))
        }

        dispatch(GetPageTimes())
      }
    })
  }, [])

  ///check arrival
  useEffect(() => {
    if (checkArriveTerminal) {
      closeAds()
      navigate('/terminal/dest')
    }
  }, [checkArriveTerminal])

  //check ads
  useEffect(() => {
    const interval = setInterval(() => {
      if (!checkArriveTerminal) dispatch(adsManagerActions.checkShowAds())
    }, 3 * 1000)
    return () => clearInterval(interval)
  }, [dispatch])

  const closeAds = () => {
    dispatch(adsManagerActions.setShowAds(false))
  }

  return loading ? (
    <LinearProgress />
  ) : (
    <>
      {<SocketController />}
      <div className='container-car'>
        <Header />
        <div className='main-car'>
          <Sidebar />
          <div className='content-car flex-grow' style={{flexGrow: '1', marginRight: '430px'}}>
            {!showAds && <Outlet />}
            {showAds && <Advertisement closeAds={closeAds} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export {TerminalLayout}
