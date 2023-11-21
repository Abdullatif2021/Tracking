import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Part = {
  id: number,
  parent :string,
  name: string,
  ads_id :string,
  maintenance:boolean

}

export type PartQueryResponse = Response<Array<Part>>

export const initialPartModel: Part = {
  id: null,
  name: null,
  parent:null,
  ads_id:null,
  maintenance:null

}
