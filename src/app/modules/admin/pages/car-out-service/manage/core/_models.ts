import { ID, Response } from '../../../../../../../_metronic/helpers'

export type CarOutService = {
  id: number
  vehicles_id: string,
  start: string,
  end:string,
  period?:string,
  reason_id?:string,
  reason?:string,
  status:number,


}
export type CarOutServiceQueryResponse = Response<Array<CarOutService>>
export const initialCarServiceModel: CarOutService = {
  id: null,
  vehicles_id: null,
  start: null,
  end:null,
  status:null
}



export enum CarOutStatus{
  NotCheck=0,
  Approved=1,
  Rejected=2,

}