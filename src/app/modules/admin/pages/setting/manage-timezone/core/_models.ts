import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Timezone = {
  id: number,
  timezone: string,


}

export type TimezoneQueryResponse = Response<Array<Timezone>>

export const timezoneCancelModel: Timezone = {
  id: null,
  timezone: null

}
