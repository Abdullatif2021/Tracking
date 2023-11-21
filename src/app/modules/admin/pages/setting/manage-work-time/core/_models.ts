import {ID, Response} from '../../../../../../../_metronic/helpers'

export type WorkingTIme = {
  id: number
  name: string
  color: string
  code: string
  time_in: string
  time_out: string
  period:number
}

export type WorkTimeQueryResponse = Response<Array<WorkingTIme>>

export const initialWorkTimeModel: WorkingTIme = {
  id: null,
  name: null,
  code: null,
  color: null,
  time_in: null,
  time_out: null,
  period:null
}
