import { ID, Response } from '../../../../../../../_metronic/helpers'

export type VehicleModel = {
  id: number,
  make_id:number,
  make: string,
  model:string,

}


export type VehicleModelQueryResponse = Response<Array<VehicleModel>>

export const initialVehicleModel: VehicleModel = {
  "id": null,
  "make_id": null,
  "model": null,
  "make":null
}




