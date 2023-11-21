import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck } from '../../../../../_metronic/helpers'
import { AddTrip, TripDriverQueryResponse } from './Model'
const getPilotInfo = (): Promise<any> => {
  return axios.get(`one_customer`).then((d: any) => {
    return d.data?.data
  })
}


const getTripList = (query: string, page: number): Promise<TripDriverQueryResponse> => {
  return axios
    .post(`customer_trip_history?${'page=' + page}`, {
      ...ConvertStringToObject(query),
    })
    .then((d: any) => {
      return {
        data: d.data?.data?.data,
        payload: {
          pagination: {
            page_num: d.data?.data?.current_page,
            page_size: d.data?.data?.per_page,
            links: d.data?.data?.links,
          },
        },
      }
    })
}
const addTrip = (object: AddTrip): Promise<any> => {
  return axios
    .post(`customer_store_trip`, { ...object })
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
const cancelTrip = (object): Promise<any> => {
  return axios
    .post(`customer_cancel_trip`, { ...object })
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}

const updateProfile = (object): Promise<any> => {
  return axios
    .post(`update_customer`, { ...object })
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
export { getPilotInfo, getTripList, addTrip, cancelTrip,updateProfile }
