import { ID, Response } from '../../../../../../../_metronic/helpers'

export type LogTerminal = {
  vehicles_count: string,
  name:string,
  date:string,
  vehicles_id: number,
}

export type LogTerminalQueryResponse = Response<Array<LogTerminal>>

