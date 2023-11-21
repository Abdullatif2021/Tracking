import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Region = {
  id: number,
  parent :string,
  name: string,
  city_name:string,
  city_id :string,
  longitude:string,
  Latitude:string,
  type:string


}





export type RegionQueryResponse = Response<Array<Region>>

export const initialRegionModel: Region = {
  id: null,
  name: null,
  parent:null,
  city_name:null,
  city_id:null,
  longitude:null,
  Latitude:null,
  type:null
}
