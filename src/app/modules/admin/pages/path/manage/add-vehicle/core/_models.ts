import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type VehiclePath = {
  id: number
  license_plate: string,
  path_id:number
}

export type AdsQueryResponse = Response<Array<VehiclePath>>

export const initialAdsModel: VehiclePath = {
  id: null,
  license_plate: null,
  path_id:null

 
}
