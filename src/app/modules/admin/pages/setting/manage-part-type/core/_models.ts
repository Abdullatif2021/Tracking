import { ID, Response } from '../../../../../../../_metronic/helpers'

export type PartCar = {
  id: number,
  name: string,
  top :string,
  left :string,
  maintenance:boolean

}

export type PartCarQueryResponse = Response<Array<PartCar>>

export const initialPartCarModel: PartCar = {
  id: null,
  name: null,
  top:null,
  left:null,
  maintenance:null

}
