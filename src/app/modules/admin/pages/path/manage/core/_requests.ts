
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  Path, PathQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<PathQueryResponse> => {
  return axios
    .post(`all_path?${'page=' + page}`, {
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
    .post('store_path', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: Path) => {
  return axios.post(`update_path/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const addAds = (object: any) => {
  return axios
    .post('add_ads_to_path', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}


const addVehicle = (object: any) => {
  return axios
    .post('add_vehicles_to_path', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}
const getAdsPathList = (id): Promise<any> => {
  return axios
      .get(`list_ads_path/${id}`)
      .then((d: any) => {
          return d.data?.data.map((item) => {
              return {
                  value: item.id,
                  text: item.name,
                  time:item?.time
              }
          })
      })
}
const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'update_path'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'update_path'}/${id}`))
  return axios.all(requests).then(() => { })
}

export { getList, destroy, destroySelectedItems, create, update ,addAds,addVehicle,getAdsPathList}
