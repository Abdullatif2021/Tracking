import { TerminalStatus } from "../../../../_metronic/utlis/constants";


export interface TerminalPath {
  loading: boolean,
  terminalLoc : Coordinate,
  terminalInfo:TerminalType,
  devices: number[],
  devicesLocaton: any,
  devicesStatus:any,
  devicesDistance:any[],
  checkArriveTerminal:boolean,
  next_terminal?:string

}

export interface Coordinate {
  lat: number,
  lon: number,
}
export interface deviceLocation {
  lat: number,
  lon: number,
  speed:number,
}


export interface AuthModel {
  api_token: string
  refreshToken?: string
}

export interface TerminalType {
  id?: number,
  name?: string,
  longitude?: number,
  latitude?: number,
  voice?: string,
  priority?: number,
  status?: TerminalStatus,
  time?: string
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




export interface CoordDistance {
  currentLat: number,
  currentLon: number,
  goalLat: number,
  goalLon: number,
}