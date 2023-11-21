import { ID, Response } from '../../../../../../_metronic/helpers'

export type TripDriverReport = {
  driver: string,
  year: string,
  month: string,
  status_1:any[],
  count_status_1: number,
  status_2:any[],
  count_status_2: number,
  status_0:any[],
  count_status_0: number,
  status_4:any[],
  count_status_4: number,
}

export type TripDriverReportQueryResponse = Response<Array<TripDriverReport>>