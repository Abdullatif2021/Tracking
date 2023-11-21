
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import { AddCameraVehicle, CameraQueryResponse, CameraVehicleResponse } from './_models'
const getList = (query: string, page: number): Promise<CameraQueryResponse> => {
  return axios
    .post(`list_camera?${'page=' + page}`, {
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

const addCameraToVehicle = (object: AddCameraVehicle) => {
  return axios
    .post('store_camera', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}

const getCameraToVehicle = (id: ID): Promise<CameraVehicleResponse> => {
  return axios
    .post(`view_camera/${id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data?.data)
}

export { getList, addCameraToVehicle,getCameraToVehicle }
