import { ID, Response } from '../../../../../../../_metronic/helpers'

export type UserType = {
  id: number,
  name: string,
  email: string,
  mobile: string,
  gender: string



}


export type UserTypeQueryResponse = Response<Array<UserType>>

export const initialUserTypeeModel: UserType = {
  "id": null,
  "name": null,
  "email": null,
  "mobile": null,
  "gender": null

}






