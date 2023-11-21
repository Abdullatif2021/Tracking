import { ID, Response } from '../../../../../../../_metronic/helpers'

export type City = {
  id: number,
  parent :string,
  name: string,
  name_country:string,
  country_id :string,

}

export type CityQueryResponse = Response<Array<City>>

export const initialCityModel: City = {
  id: null,
  name: null,
  parent:null,
  name_country:null,
  country_id:null

}
