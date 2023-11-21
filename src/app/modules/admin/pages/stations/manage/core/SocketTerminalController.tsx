import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { checkArrivedDevices } from "../../../../../terminal/services/measure";
import { Coordinate } from "../../../../../terminal/core/_models";
import { sessionActions, terminalPathsActions } from "../../../../../../../store";
import { isObjectEmpty, useEffectAsync } from "../../../../../../../reactHelper";
const logoutCode = 4000;

const SocketTerminalController = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state: any) => state.terminalPath.devices);

  const terminalLoc: Coordinate = useSelector((state: any) => state.terminalPath.terminalLoc);
  const devicesLocaton: Coordinate = useSelector((state: any) => state.terminalPath.devicesLocaton);

  const socketRef = useRef<any>();

  const checkInitPath = useRef(true)



  useEffect(() => {
    //  alert(JSON.stringify(currentPosition))
    if (!isObjectEmpty(devicesLocaton) && !isObjectEmpty(terminalLoc)) {
      dispatch(checkArrivedDevices(
        {
          devicesLocaton,
          terminalLoc
        }
      ))
    }
  }, [dispatch, devicesLocaton]);

  const connectSocket = () => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

    // const socket = new WebSocket(
    //   `${protocol}//${window.location.host}/api/socket`
    // );
  const socket = new WebSocket(`${process.env.REACT_APP_TRUCKGPS_SOCKET_URL}`);

    socketRef.current = socket;

    socket.onopen = () => {
      dispatch(sessionActions.updateSocket(true));
    };

    socket.onclose = async (event) => {
      dispatch(sessionActions.updateSocket(false));
      if (event.code !== logoutCode) {
        try {
        } catch (error) {
          // ignore errors
        }
        setTimeout(() => connectSocket(), 60000);
      }
    };

    socket.onmessage = (event) => {

      const data = JSON.parse(event.data);
      if (data.positions) {
        let temp = data.positions.filter(
          (x: any) => devices?.includes(x.deviceId)
        );
        if (temp && temp.length > 0) {
          if (checkInitPath.current) {
            checkInitPath.current = false;
            dispatch(sessionActions.initPositions())
            dispatch(sessionActions.setRefresh())
          }
          dispatch(terminalPathsActions.updateDeviceLocation(temp))
          
          dispatch(terminalPathsActions.updateDeviceLocation(temp))
          dispatch(sessionActions.updatePositions(temp));
        }

      }

    };
  };



  useEffectAsync(async () => {
    connectSocket();
    return () => {
      const socket = socketRef.current;
      if (socket) {
        socket.close(logoutCode);
      }
    };


  }, []);



  return (
    <>
    </>
  );
};

export default connect()(SocketTerminalController);
