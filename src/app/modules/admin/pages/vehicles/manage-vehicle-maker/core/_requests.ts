
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, Response, extractPageNumber } from '../../../../../../../_metronic/helpers'

import {  VehicleMaker, VehicleMakerQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<VehicleMakerQueryResponse> => {
  return axios
    .post(`list_vehicles_maker?${'page=' + page}`, {
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
    .post('store_vehicle_maker', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}
//VehicleMaker
const update = (object: any ,id:any) => {
  return axios.post(`update_vehicle_maker/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: any): Promise<void> => {
  return axios.post(`${'destroy_vehicle_maker'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'destroy_vehicle_maker'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update }
