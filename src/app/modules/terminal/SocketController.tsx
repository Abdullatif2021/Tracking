import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import {sessionActions, terminalPathsActions, truckPathActions} from '../../../store'

import {isObjectEmpty, useEffectAsync} from '../../../reactHelper'
import {checkArrivedDevices} from './services/measure'
import {TerminalType, CoordDistance, Coordinate} from './core/_models'

const logoutCode = 4000

const SocketController = () => {
  const dispatch = useDispatch()
  const devices = useSelector((state: any) => state.terminalPath.devices)

  const terminalLoc: Coordinate = useSelector((state: any) => state.terminalPath.terminalLoc)
  const devicesLocaton: Coordinate = useSelector((state: any) => state.terminalPath.devicesLocaton)

  const socketRef = useRef<any>()

  useEffect(() => {
    //  alert(JSON.stringify(currentPosition))
    if (true) {
      console.log(devicesLocaton)
      dispatch(
        checkArrivedDevices({
          devicesLocaton,
          terminalLoc,
        })
      )
    }
  }, [dispatch, devicesLocaton])

  const connectSocket = () => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'

    // const socket = new WebSocket(
    //   `${protocol}//${window.location.host}/api/socket`
    // );

    const socket = new WebSocket(`${process.env.REACT_APP_TRUCKGPS_SOCKET_URL}`)
    socketRef.current = socket

    socket.onopen = () => {
      dispatch(sessionActions.updateSocket(true))
    }

    socket.onclose = async (event) => {
      dispatch(sessionActions.updateSocket(false))
      if (event.code !== logoutCode) {
        try {
        } catch (error) {
          // ignore errors
        }
        setTimeout(() => connectSocket(), 60000)
      }
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.positions) {
        let onlineDevices= devices.filter(x=>x.status=='online').map(x=>x.id)
        let temp = data.positions.filter((x: any) => devices.map(x=>x.id)?.includes(x.deviceId))
        let onlinePOsitions = data.positions.filter((x: any) => onlineDevices?.includes(x.deviceId))
        if (temp && temp.length > 0) {
          dispatch(terminalPathsActions.updateDeviceLocation(onlinePOsitions))
          dispatch(sessionActions.updatePositions(temp))
        }
      }
    }
  }

  useEffectAsync(async () => {
    connectSocket()
    return () => {
      const socket = socketRef.current
      if (socket) {
        socket.close(logoutCode)
      }
    }
  }, [])

  return <></>
}

export default connect()(SocketController)
