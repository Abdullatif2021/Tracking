import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector, connect} from 'react-redux'
import {sessionActions} from '../../../../../../../store'
import {useEffectAsync} from '../../../../../../../reactHelper'
// import { sessionActions, terminalPathsActions, truckPathActions } from "../../../store";

// import { isObjectEmpty, useEffectAsync } from "../../../reactHelper";
// import { checkArrivedDevices } from "./services/measure";
// import { TerminalType, CoordDistance, Coordinate } from "./core/_models";

const logoutCode = 4000

const SocketController = () => {
  const dispatch = useDispatch()
  const stationDevices = useSelector((state: any) => state.devices.stationDevices);
  const checkInitPath = useRef(true)
  //   const terminalLoc: Coordinate = useSelector((state: any) => state.terminalPath.terminalLoc);
  //   const devicesLocaton: Coordinate = useSelector((state: any) => state.terminalPath.devicesLocaton);

  const socketRef = useRef<any>()

  //   useEffect(() => {
  //     //  alert(JSON.stringify(currentPosition))
  //     if (!isObjectEmpty(devicesLocaton) && !isObjectEmpty(terminalLoc)) {
  //       dispatch(checkArrivedDevices(
  //         {
  //           devicesLocaton,
  //           terminalLoc
  //         }
  //       ))
  //     }
  //   }, [dispatch, devicesLocaton]);

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
    //  alert(JSON.stringify(data))
      if (data.positions) {
        let temp = data.positions.filter((x: any) =>
        stationDevices.map((x) => x.id).includes(x.deviceId)
        )
        if (temp && temp.length > 0) {
          if (checkInitPath.current) {
            checkInitPath.current = false;
            dispatch(sessionActions.initPositions())
            dispatch(sessionActions.setRefresh())
          }
          dispatch(sessionActions.updatePositions(temp))
        }
        //dispatch(sessionActions.updatePositions(data.positions))
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
