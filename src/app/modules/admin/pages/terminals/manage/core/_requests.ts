
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  Terminal, TerminalQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<TerminalQueryResponse> => {
  return axios
    .post(`list_terminal?${'page=' + page}`, {
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

const create = (object: Terminal) => {
  return axios
    .post('store_terminal', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: Terminal) => {
  return axios.post(`update_terminal/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'destroy_terminal'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'destroy_terminal'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update }
