import { ID, Response } from '../../../../../../../_metronic/helpers'

export type StopReport = {
  deviceName: string,
  startTime: string,
  endTime: string,
  distance: string,
  address: string,
  duration: string,
  spentFuel: string,
}

export type StopReportQueryResponse = Response<Array<StopReport>>

