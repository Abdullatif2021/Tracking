
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import { CarOutService,CarOutServiceQueryResponse} from './_models'
const getList = (query: string, page: number): Promise<CarOutServiceQueryResponse> => {
  return axios
    .post(`list_car_out_of_service?${'page=' + page}`, {
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

const create = (object: CarOutService) => {
  return axios
    .post('store_car_out_of_service', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
const update = (object: CarOutService) => {
  return axios
    .post(`update_car_out_of_service/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}


const acceptReject = (object:{status:number},id:ID): Promise<any> => {
  return axios
    .post(`car_out_of_service_status/${id}`,{...object})
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}

export { getList, create,update,acceptReject }
