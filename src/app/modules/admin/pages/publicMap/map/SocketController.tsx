import React, {  useRef } from 'react'
import { useDispatch,  connect } from 'react-redux'
import { sessionActions } from '../../../../../../store'
import { useEffectAsync } from '../../../../../../reactHelper'

const logoutCode = 4000

const SocketController = () => {
  const dispatch = useDispatch()
  const checkInitPath = useRef(true)
  const socketRef = useRef<any>()


  const connectSocket = () => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'

  //const socket = new WebSocket(`${protocol}//${window.location.host}/api/socket`)
  const socket = new WebSocket(`${process.env.REACT_APP_TRUCKGPS_SOCKET_URL}`);
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
        if (checkInitPath.current) {
          checkInitPath.current = false
          dispatch(sessionActions.setRefresh())
        }
        dispatch(sessionActions.updatePositions(data.positions))
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
