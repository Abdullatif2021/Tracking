import { ID, Response } from '../../../../../../../_metronic/helpers'

export type ReasonCancel = {
  id: number,
  reason: string,


}

export type ReasonCancelQueryResponse = Response<Array<ReasonCancel>>

export const initialReasonCancelModel: ReasonCancel = {
  id: null,
  reason: null

}
