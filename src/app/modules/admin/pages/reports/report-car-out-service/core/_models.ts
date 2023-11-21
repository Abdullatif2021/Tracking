import { ID, Response } from '../../../../../../../_metronic/helpers'

export type CarOutService = {
  license_plate:string,
  start: string,
  end: string,
  vehicles_id: number,
}

export type CarOutServiceQueryResponse = Response<Array<CarOutService>>

