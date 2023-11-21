
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  Vehicle, VehicleQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<VehicleQueryResponse> => {
  return axios
    .post(`list_vehicles?${'page=' + page}`, {
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
    .post('store_vehicle', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: any,id:ID) => {
  return axios.post(`update_vehicle/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}

const getAccountCar = (id: ID) => {
  return axios
    .get(`${'cars_account'}/${id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}
const SaveAccountCar = (object :any ,id: ID) => {
  return axios
    .post(`${'cars_account'}/${id}`,object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.
}
const getVehicleInfo = (id: ID) => {
  return axios
    .get(`${'one_vehicle'}/${id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.
}
const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'destroyVehicle'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'destroyVehicle'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create,update ,getAccountCar,SaveAccountCar,getVehicleInfo}
