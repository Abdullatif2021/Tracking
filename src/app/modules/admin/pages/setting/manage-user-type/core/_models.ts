import {ID, Response} from '../../../../../../../_metronic/helpers'

export type UserType = {
  id: number
  name: string
}

export type UserTypeQueryResponse = Response<Array<UserType>>

export const intialUserTypeModel: UserType = {
  id: null,
  name: null,
}
