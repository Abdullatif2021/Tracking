import {createSlice} from '@reduxjs/toolkit'
import {TerminalPath, deviceLocation} from '../core/_models'
import {checkArrivedDevices} from '../services/measure'

export enum StatusArrive {
  Arrived = 1,
  NotArrived = 2,
}
const initialState: TerminalPath = {
  loading: true,
  terminalLoc: {
    lat: 0,
    lon: 0,
  },
  terminalInfo: {},
  devices: [],
  devicesLocaton: {},
  devicesDistance: [],
  devicesStatus: {},
  checkArriveTerminal: false,
  next_terminal: '',
}

const {reducer, actions} = createSlice({
  name: 'terminalPath',
  initialState,
  reducers: {
    setDevices(state, action) {
      let terminal = action.payload?.terminal
      state.devices = action.payload?.devices;
      if (terminal?.length > 0) {
        state.terminalInfo = terminal[0]
        state.terminalLoc = {
          lat: terminal[0].latitude,
          lon: terminal[0].longitude,
        }
      }

      action.payload?.devices?.forEach((item: any) => {
        state.devicesStatus[item?.id] = {
          name: item.name,
          deviceId: item?.id,
          status: StatusArrive.NotArrived,
          online:item?.status =='online',
        }
      })
      state.next_terminal = action.payload?.next_terminal
      state.loading = false
    },
    updateDeviceLocation(state, action) {
      action.payload.forEach((item: any) => {
        let loc: deviceLocation = {
          lat: item.latitude,
          lon: item.longitude,
          speed: item.speed,
        }
        state.devicesLocaton[item.deviceId] = loc
      })
    },
    updateArriveTerminal(state, action) {
      state.checkArriveTerminal = action.payload
      /* state.devices?.forEach((item: any) => {
        state.devicesStatus[item] = {
          ...state.devicesStatus[item],
          status: StatusArrive.NotArrived,
        }
      })*/
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkArrivedDevices.pending, (state) => {})
    builder.addCase(checkArrivedDevices.fulfilled, (state, {payload}) => {
      var temp = payload
      if (temp) {
        var devicesDistance = []
        var deviceStatus = state.devicesStatus
        Object.keys(temp)?.map((key, index) => {
          // deviceStatus[temp[key]?.deviceId] = {
          //   index: index,
          //   ...deviceStatus[temp[key]?.deviceId],
          //   distance: temp[key]?.distance,
          //   duration: temp[key]?.duration,
          //   //  status: StatusArrive.NotArrived,
          // }

          devicesDistance.push({
            ...deviceStatus[temp[key]?.deviceId],
            distance: temp[key]?.distance,
            duration: temp[key]?.duration,
          })
          if (
            temp[key]?.distance < 5 &&
            deviceStatus[temp[key]?.deviceId]?.status != StatusArrive.Arrived
          ) {
            state.checkArriveTerminal = true
            deviceStatus[temp[key]?.deviceId] = {
              ...deviceStatus[temp[key]?.deviceId],
              status: StatusArrive.Arrived,
            }
            const index=devicesDistance.findIndex(x=>x.deviceId==temp[key]?.deviceId)
            devicesDistance[index]={
              ...devicesDistance[index],
              arrivedTime:new Date()
            }
          } else if (
            temp[key]?.distance > 400 &&
            deviceStatus[temp[key]?.deviceId]?.status == StatusArrive.Arrived
          ) {
            deviceStatus[temp[key]?.deviceId] = {
              ...deviceStatus[temp[key]?.deviceId],
              status: StatusArrive.NotArrived,
            }
          }
          //  else {
          //   deviceStatus[temp[key]?.deviceId] = {
          //     ...deviceStatus[temp[key]?.deviceId],
          //     status: StatusArrive.NotArrived,
          //   }
          // }
        })
        state.devicesStatus = deviceStatus
        state.devicesDistance = devicesDistance
      }
    })

    builder.addCase(checkArrivedDevices.rejected, (state, {payload}) => {
      //state.error = payload
      //state.loading = false
    })
  },
})

export {actions as terminalPathsActions}
export {reducer as terminalPathReducer}

// {
//     loading: false,
//     devices:[],
//     // stationPosition: {},
//     // staionDevices: [],
//     // devicesDistance: [],
//     // devicesLocation: [],
//     // checkArrive: false,

// },
