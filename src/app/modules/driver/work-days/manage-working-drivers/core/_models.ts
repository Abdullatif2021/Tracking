import { ID, Response } from '../../../../../../_metronic/helpers'


export type WorkingTime = {
  id: number,
  start: string,
  end: string,
  title: string
}

export type WorkingTimeQueryResponse = Response<Array<WorkingTime>>




