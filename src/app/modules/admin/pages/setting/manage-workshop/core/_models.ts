import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Wrorkshop = {
  id: number
  parent: string
  name: string
  mobile: string
  address: string
}

export type WrorkshopQueryResponse = Response<Array<Wrorkshop>>

export const initialWrorkshopModel: Wrorkshop = {
  id: null,
  parent: null,
  name: null,
  mobile: null,
  address: null,
}
