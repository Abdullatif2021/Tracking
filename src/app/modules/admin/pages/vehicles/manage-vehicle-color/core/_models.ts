import { ID, Response } from '../../../../../../../_metronic/helpers'

export type VehicleColor = {
  id: number,
  color:string,


}


export type VehicleColorQueryResponse = Response<Array<VehicleColor>>

export const initialVehicleModel: VehicleColor = {
  "id": null,
  "color": null
 
}




