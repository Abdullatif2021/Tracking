import {ID, Response} from '../../../../../../../_metronic/helpers'

export type InfractionType = {
  id: number,
  parent:string,
  name: string

}

export type InfractionTypeQueryResponse = Response<Array<InfractionType>>

export const initialInfractionTypeModel: InfractionType = {
  id: null,
  name: null,
  parent: null,

}
