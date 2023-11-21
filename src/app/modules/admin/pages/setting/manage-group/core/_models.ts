import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Group = {
  id: number
  parent: string
  name: string
  region_name: string
  region_id: string
}

export type GroupQueryResponse = Response<Array<Group>>

export const initialGroupModel: Group = {
  id: null,
  parent: null,
  name: null,
  region_name: null,
  region_id: null,
}
