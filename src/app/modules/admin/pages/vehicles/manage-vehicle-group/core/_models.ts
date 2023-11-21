import { ID, Response } from '../../../../../../../_metronic/helpers'

export type VehicleGroup = {
  id: number,
  name: number,
  description: string,
  note: string,
  users_Count?: number,
  vehicles_Count?: number
}


export type VehicleGroupQueryResponse = Response<Array<VehicleGroup>>

export const initialVehicleModel: VehicleGroup = {
  "id": null,
  "name": null,
  "description": null,
  "note": null,
//  "users_Count": 0,
 // "vehicles_Count": 0,
}




