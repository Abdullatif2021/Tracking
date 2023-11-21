import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Driver = {
  id: number,
  name: string,
  email: string,
  mobile:string,
  created_at: string,
  gender:string,
  group_id:string



}


export type UserQueryResponse = Response<Array<Driver>>

export const initialDriverModel: Driver = {
  "id": null,
  "name": null,
  "email": null,
  "mobile":null,
  "created_at": null,
  "group_id":null,
  "gender":null

}




