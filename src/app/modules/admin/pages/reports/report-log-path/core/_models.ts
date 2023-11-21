import { ID, Response } from '../../../../../../../_metronic/helpers'

export type LogPath = {
  start_path: string,
  end_path: string,
  name:string,
  date:string,
  vehicles_id: number,
}

export type LogPathQueryResponse = Response<Array<LogPath>>

