import { ID, Response } from '../../../../../../../_metronic/helpers'

export type SummeryReport = {
  deviceName: string,
  startTime: string,
  endTime: string,
  averageSpeed:string,
  maxSpeed:string,
  distance: string,
  startOdometer:string,
  endOdometer:string,
  engineHours:string,
  spentFuel: string,
}

export type TripCustomerReportQueryResponse = Response<Array<SummeryReport>>

