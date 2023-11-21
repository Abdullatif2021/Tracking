import {createSlice} from '@reduxjs/toolkit'
import {formatSeconds, getTimeDifferenceInSeconds} from '../../../../reactHelper'
import {TerminalStatus} from '../../../../_metronic/utlis/constants'
import {checkArriveNextTerminal, checkNearTerminal} from '../services/measure'
import {TerminalType, TruckState} from '../core/_models'

//import { checkArriveNextStation, checkNearStation } from "../../../../laravelconnect/services/measure";

const initTerminal: TerminalType = {
  id: 0,
  name: '',
  longitude: 0,
  latitude: 0,
  voice: '',
  priority: 0,
  status: TerminalStatus.IN,
  time: '',
}

const initPosition = {
  longitude: 0,
  latitude: 0,
}
const initialState: TruckState = {
  error: null,
  loading: true,
  // checkInitPath: true,
  terminals: [initTerminal],
  currentTerminal: initTerminal,
  nextTerminal: initTerminal,
  checkArriveTerminal: false,
  durationStation: {},
  currentPosition: initPosition,
  speed: 0,
  path: 0,
  predectedTime: '',
}

const {reducer, actions} = createSlice({
  name: 'truckPath',
  initialState,
  reducers: {
    setTerminals(state, action) {
      state.path = action.payload?.id
      let terminals = action.payload?.terminal
      let stopStation: TerminalType = terminals.find((x: TerminalType) => x.status == 1)

      state.terminals = terminals.map((item: TerminalType, index: number) => {
        if (item.id == stopStation?.id) {
          return {
            ...item,
            status: TerminalStatus.IN,
          }
        } else if (item.priority > stopStation?.priority) {
          return {
            ...item,
            status: TerminalStatus.BEFORE,
          }
        } else {
          return {
            ...item,
            status: TerminalStatus.AFTER,
          }
        }
      })

      state.loading = false
    },
    updateCurrentPosition(state, action) {
      state.currentPosition = action.payload
    },
    updateSpeed(state, action) {
      state.speed = action.payload
    },
    updateArriveTerminal(state) {
      state.checkArriveTerminal = false
    },
  },

  extraReducers: (builder) => {
    builder.addCase(checkNearTerminal.pending, (state) => {})

    builder.addCase(checkNearTerminal.fulfilled, (state, {payload}) => {
      // define TEmp  for current and next terminal
      let tempNextTerminal: TerminalType
      let terminals: TerminalType[]
      //define terminals
      terminals = state.terminals
      //define distanse between stattions and my curent pos
      let distanceStation: TerminalType = payload?.distanceStation

      //define duration between stattions and my curent pos
      let durationStation: TerminalType = payload?.durationStation
   
      //define close terminal
      let closestTerminal: TerminalType = payload?.closestCoord

      //deine stop terminal from backend
      let lastStopTerminal: TerminalType =
        terminals.find((x: TerminalType) => x.status == 0) || terminals[0]
      //define difference between last time stop and current time in second
      let timeDifferenceByLaststop: number = getTimeDifferenceInSeconds(lastStopTerminal?.time)
      if (
        timeDifferenceByLaststop > 0 &&
        timeDifferenceByLaststop < durationStation[lastStopTerminal?.id]
      ) {
        if (lastStopTerminal.priority == terminals.length) {
          tempNextTerminal = terminals.find((x: TerminalType) => x.priority == 1) || terminals[0]
        } else {
          tempNextTerminal =
            terminals.find((x: TerminalType) => x.priority == lastStopTerminal?.priority + 1) ||
            terminals[0]
        }
      } else {
        //  alert(findSmallestAttribute(durationStation))
        tempNextTerminal = closestTerminal
        // terminals.find((x: TerminalType) => x.id == findSmallestAttribute(durationStation)) || terminals[0]
        // closestTerminal;
      }
      let updatedTerminals = terminals.map((item: TerminalType, index) => {
        if (tempNextTerminal?.priority == 1) {
          // if (item.priority == terminals.length) {
          //   return {
          //     ...item,
          //     status: TerminalStatus.IN,
          //   }
          // } else {
            return {
              ...item,
              status: TerminalStatus.BEFORE,
            }
          //}
        } else {
          if (item.priority == tempNextTerminal.priority - 1) {
            return {
              ...item,
              status: TerminalStatus.IN,
            }
          } else if (item.priority < tempNextTerminal.priority) {
            return {
              ...item,
              status: TerminalStatus.AFTER,
            }
          } else {
            return {
              ...item,
              status: TerminalStatus.BEFORE,
            }
          }
        }
      })

      state.terminals = updatedTerminals

      state.nextTerminal = tempNextTerminal
      if (tempNextTerminal.priority == 1) {
        state.currentTerminal =
          terminals.find((x: TerminalType) => x.priority == terminals.length) || initTerminal
      } else {
        state.currentTerminal =
          terminals.find((x) => x.priority == tempNextTerminal.priority - 1) || initTerminal
      }

      state.durationStation = durationStation
      state.predectedTime = formatSeconds(durationStation[tempNextTerminal?.id])
      // state.loading = false;
    })
    builder.addCase(checkNearTerminal.rejected, (state, {payload}) => {
      //state.error = payload
      //state.loading = false
    })

    builder.addCase(checkArriveNextTerminal.fulfilled, (state, {payload}) => {
      //get distance
      const distance = payload?.routes[0]?.distance
      //get duration
      const duration = payload?.routes[0]?.duration
      //update predicted time
      state.predectedTime = formatSeconds(duration)

      // let terminals=state.terminals;
      if (distance < 50) {
        state.currentTerminal = state.nextTerminal
        //check last terminal;
        let final = state.terminals.find((x) => x.priority == state.nextTerminal.priority + 1)

        if (final) {
          state.nextTerminal = final
        } else {
          state.nextTerminal = state.terminals.find((x) => x.priority == 1) || initTerminal
        }

        let terminals = state.terminals
        state.terminals = terminals.map((item: TerminalType) => {
          if (state.nextTerminal.priority == 1) {
            return {
              ...item,
              status: TerminalStatus.BEFORE,
            }
          } else {
            if (item.priority == state.currentTerminal.priority) {
              return {
                ...item,
                status: TerminalStatus.IN,
              }
            } else if (item.priority < state.currentTerminal.priority) {
              return {
                ...item,
                status: TerminalStatus.AFTER,
              }
            } else {
              return {
                ...item,
                status: TerminalStatus.BEFORE,
              }
            }
          }
        })
        state.checkArriveTerminal = true
      }
    })
  },
})

export {actions as truckPathActions}
export {reducer as truckPathReducer}
