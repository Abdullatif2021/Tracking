
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  UserType, UserTypeQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<UserTypeQueryResponse> => {
  return axios
    .post(`list_users_type?${'page=' + page}`, {
      ...ConvertStringToObject(query)
    })
    .then((d: any) => {
      return {
        data: d.data?.data?.data,
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

const create = (object: UserType) => {
  return axios
    .post('store_users_type', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: UserType) => {
  return axios.post(`update_users_type/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'update_users_type'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'update_users_type'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update }
