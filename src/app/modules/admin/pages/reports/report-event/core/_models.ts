import {ID, Response} from '../../../../../../../_metronic/helpers'

export type EventReport = {
  eventTime: string,
  type: string,
}

export type EventReportQueryResponse = Response<Array<EventReport>>


