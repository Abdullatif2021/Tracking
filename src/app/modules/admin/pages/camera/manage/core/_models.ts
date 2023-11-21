import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Camera = {
  id: number
  vehicles_count: string,
  license_plate: string,

}
export type AddCameraVehicle = {
  vehicles_id: number
  code: string,
  link: string,
}
export type CameraVehicle = {
  id: number
  code: string,
  license_plate: string,
}
export type CameraQueryResponse = Response<Array<Camera>>
export type CameraVehicleResponse = Array<CameraVehicle>
export const initialCameraModel: Camera = {
  id: null,
  license_plate: null,
  vehicles_count: null
}

export const initialAddCamera: AddCameraVehicle = {
  "vehicles_id": null,
  "code": null,
  "link": null
}

export enum CameraShow {
  Four =1,
  Three=2,
  Split=3,
  Single=4
}