import {ID, Response} from '../../../../../../../_metronic/helpers'

export type CameraLive = {
  url: string
  authentication?: string | undefined
}

export interface CameraInfoList {
  cameraIndexCode: string
  cameraName: string
  capabilitySet: string
  devResourceType: string
  encodeDevIndexCode: string
  devIndexCode: string
  recordType: string
  recordLocation: string
  regionIndexCode: string
  siteIndexCode: string
}

export interface CameraInfo {
  total: number
  pageNo: number
  pageSize: number
  list: CameraInfoList[]
}

export type CameraInfoQueryResponse = Response<CameraInfo>
// export type CameraVehicleResponse = Array<CameraVehicle>
export const initialCameraInfo: CameraInfo = {
  total: 0,
  pageNo: 1,
  pageSize: 10,
  list: [],
}

// export const initialAddCamera: AddCameraVehicle = {
//   vehicles_id: null,
//   code: null,
//   link: null,
// }

export enum CameraShow {
  Four = 1,
  Three = 2,
  Split = 3,
  Single = 4,
}
