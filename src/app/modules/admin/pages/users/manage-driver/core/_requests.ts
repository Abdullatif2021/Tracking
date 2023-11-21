import axios, {AxiosResponse} from 'axios'
import {ConvertStringToObject, ID, ResponeApiCheck} from '../../../../../../../_metronic/helpers'
import {Driver, UserQueryResponse} from './_models'
const getList = (query: string, page: number): Promise<UserQueryResponse> => {
  return axios
    .post(`list_driver?${'page=' + page}`, {
      ...ConvertStringToObject(query),
    })
    .then((d: any) => {
      return {
        data: d.data?.data?.data,
        payload: {
          pagination: {
            page_num: d.data?.data?.current_page,
            page_size: d.data?.data?.per_page,
            links: d.data?.data?.links,
          },
        },
      }
    })
}

const create = (object: any) => {
  return axios
    .post('store_driver', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: any,id:ID) => {
  return axios
    .post(`update_driver/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}

const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'update_driver'}/${id}`).then(() => {})
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'update_driver'}/${id}`))
  return axios.all(requests).then(() => {})
}
const getDriver = (id: ID): Promise<any> => {
  return axios.get(`${'one_driver'}/${id}`).then((response) => response.data)
}

export {getList, destroy, destroySelectedItems, create, update,getDriver}
