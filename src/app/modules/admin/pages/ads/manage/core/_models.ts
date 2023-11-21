import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Ads = {
  id: number
  name: string
  period: number
  link: string
}

export type AdsQueryResponse = Response<Array<Ads>>

export const initialAdsModel: Ads = {
  id: null,
  name: null,
  period:null,
  link:null,

 
}
