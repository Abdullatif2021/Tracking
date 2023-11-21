import {ID, Response} from '../../../../../../../_metronic/helpers'

export type ReasonReport = {
  reason: string,
  count_driver: string,
  count_passenger:string
}

export type ReasonReportQueryResponse = Response<Array<ReasonReport>>


