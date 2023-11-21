import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Station = {
  id: number
  name: string,
  permissions:any,
}
export type Role = {
  id: number
  name: string
  code: string
}

export type StationQueryResponse = Response<Array<Station>>

export type RoleResponse = Array<Role>

export const initialVehicleModel: Station = {
  id: null,
  name: null,
  permissions:[]
}
