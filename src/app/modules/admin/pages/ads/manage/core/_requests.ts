
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  Ads, AdsQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<AdsQueryResponse> => {
  return axios
    .post(`all_ads?${'page=' + page}`, {
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

const create = (object: any) => {
  return axios
    .post('store_ads', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: any,id:ID) => {
  return axios.post(`update_ads/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'update_ads'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'update_ads'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update }
