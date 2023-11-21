import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type AdsPath = {
  id: number
  name: string
  period: number,
  path_ads_id:number
}

export type AdsQueryResponse = Response<Array<AdsPath>>

export const initialAdsModel: AdsPath = {
  id: null,
  name: null,
  period:null,
  path_ads_id:null

 
}
