import { Permission } from './../../manage-permission/core/_models';
import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Role = {
  id: number
  name: string,
  permissions :number[]

}

export type RoleQueryResponse = Response<Array<Role>>

export const initialRoleModel: Role = {
  id: null,
  name: null,
  permissions:[]

}
export const initialAddPermissionModel: Array<number> = []
  

