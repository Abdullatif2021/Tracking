import {ID, Response} from '../../../../../../../_metronic/helpers'

export type SessionHistory = {
  id: number
  date: string
  start_time: string
  end_time: string
  vehicles:string
}

export type SessionHistoryQueryResponse = Response<Array<SessionHistory>>

