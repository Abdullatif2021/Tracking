
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  VehicleGroup, VehicleGroupQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<VehicleGroupQueryResponse> => {
  return axios
    .post(`list_vehicles_group?${'page=' + page}`, {
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

const create = (object: VehicleGroup) => {
  return axios
    .post('store_vehicle_group', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: VehicleGroup) => {
  return axios.post(`update_vehicle_group/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (userId: ID): Promise<void> => {
  return axios.post(`${'destroy_vehicle_group'}/${userId}`).then(() => { })
}

const destroySelectedItems = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.post(`${'destroy_vehicle_group'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update }
