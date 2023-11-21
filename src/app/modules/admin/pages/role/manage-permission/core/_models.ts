import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Permission = {
  id: number
  name: string
 
}

export type PermissionQueryResponse = Response<Array<Permission>>

export const initialPermissionModel: Permission = {
  id: null,
  name: null,
 

 
}
