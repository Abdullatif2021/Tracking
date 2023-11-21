import { TerminalStatus } from "../../../../_metronic/utlis/constants";


export interface TerminalType {
  id: number,
  name: string,
  longitude: number,
  latitude: number,
  voice: string,
  priority: number,
  status: TerminalStatus,
  time: string
}

export interface TruckState {
  error?: any,
  loading: boolean,
  // checkInitPath: true,
  terminals: TerminalType[],
  currentTerminal: TerminalType,
  nextTerminal: TerminalType,
  checkArriveTerminal: boolean,
  durationStation: any,
  currentPosition: Coordinate,
  speed: number,
  path: number,
  predectedTime: string,
}


export interface Coordinate {
  longitude: number,
  latitude: number,
}

export interface CoordDistance {
  currentLat: number,
  currentLon: number,
  goalLat: number,
  goalLon: number,
}