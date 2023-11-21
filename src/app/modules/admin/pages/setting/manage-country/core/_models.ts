import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Country = {
  id: number,
  name: string,
  parent:string,

}

export type CountryQueryResponse = Response<Array<Country>>

export const intialCountryModel: Country = {
  id: null,
  name: null,
  parent:null

}
