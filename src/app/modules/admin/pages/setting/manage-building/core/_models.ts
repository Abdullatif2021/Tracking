import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Building = {
  id: number,
  parent :string,
  name: string,
  group_name:string,
  group_id :string,



}




export type BuildingQueryResponse = Response<Array<Building>>

export const initialBuildingModel: Building = {
  id: null,
  name: null,
  parent:null,
  group_name:null,
  group_id:null,

}
