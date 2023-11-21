
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import { AddFuel, CarOutService,FuelHistoryQueryResponse} from './_models'
const getList = (query: string, page: number): Promise<FuelHistoryQueryResponse> => {
  return axios
    .post(`list_fuel_history?${'page=' + page}`, {
      ...ConvertStringToObject(query)
    })
    .then((d: any) => {
      return {
        data: d.data?.data?.data?.data,
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

const create = (object: AddFuel) => {
  return axios
    .post('store_fuel_history', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
const update = (object: AddFuel , id:ID) => {
  return axios
    .post(`update_fuel_history/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}


export { getList, create,update }
