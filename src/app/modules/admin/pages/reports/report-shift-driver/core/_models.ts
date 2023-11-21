import { ID, Response } from '../../../../../../../_metronic/helpers'

export type ShiftDriverReport = {
  driver: string,
  time_in: string,
  time_out: string,
  total_time:string,

}

export type ShiftDriverReportQueryResponse = Response<Array<ShiftDriverReport>>

