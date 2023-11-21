import {ID, Response} from '../../../../../../../_metronic/helpers'

export type VehicleMaker = {
  id: number
  make: string,
  image: string,
  image_file:any
}


export type VehicleMakerQueryResponse = Response<Array<VehicleMaker>>

export const initialVehicleMaker: VehicleMaker = {
  id: 0,
  make: '',
  image: '',
  image_file:null,
 
}




