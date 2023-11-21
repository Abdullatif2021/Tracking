
import axios, { AxiosResponse } from 'axios'

import {   AdsQueryResponse } from './_models'
import { ConvertStringToObject, ID } from '../../../../../../../../_metronic/helpers'
const getList = (query: string, page: number,id :ID): Promise<AdsQueryResponse> => {
  return axios
    .get(`all_vehicles_path/${id}`, {
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
const destroy = (vehichle_id: ID, path_id:ID): Promise<void> => {
  return axios.post(`${'path_vehicles_delete'}/${vehichle_id}/${path_id}`).then(() => { })
}
export { getList, destroy }
