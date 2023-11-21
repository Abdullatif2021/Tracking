
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  Role, RoleQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<RoleQueryResponse> => {
  return axios
    .post(`list_roles_permissions?${'page=' + page}`, {
      ...ConvertStringToObject(query)
    })
    .then((d: any) => {
      return {
        data: d.data?.data,
        payload: {
          pagination: {
            page_num: d.data?.data?.current_page,
            page_size: d.data?.data?.per_page,
            links: d.data?.data?.links
          }
        }
      }
    })
}

const create = (object: Role) => {
  return axios
    .post('store_myroles', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const getPermissions = () => {
  return axios
    .get(`list_mypermissions`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data?.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const getPermissionRole = (role_id :ID) => {
  return axios
    .get(`list_roles_permissions_by_id/${role_id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data?.data?.permissions)
  //.then((response: Response<VehicleType>) => response.data)
}

const addPermission = (object: any, role_id :ID) => {
  return axios
    .post(`store_permissions_roles/${role_id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: Role) => {
  return axios.post(`update_myroles/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'update_myroles'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'update_myroles'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update,addPermission,getPermissionRole , getPermissions}
