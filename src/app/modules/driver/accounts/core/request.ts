import axios, {AxiosResponse} from 'axios'
import {ConvertStringToObject, ID, ResponeApiCheck} from '../../../../../_metronic/helpers'
import {TripDriverQueryResponse} from './Model'
const getDriverInfo = (): Promise<any> => {
  return axios.get(`driver_info`).then((d: any) => {
    return d.data?.data
  })
}
const getCurrentTripList = (query: string, page: number): Promise<TripDriverQueryResponse> => {
  return axios
    .post(`current_trip_driver?${'page=' + page}`, {
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

const getOldTripList = (query: string, page: number): Promise<TripDriverQueryResponse> => {
  return axios
    .post(`old_trip_driver?${'page=' + page}`, {
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
const StartTrip = (id:ID): Promise<any> => {
  return axios
    .get(`trip_status_ok/${id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
const EndTrip = (id:ID): Promise<any> => {
  return axios
    .get(`trip_status_stop/${id}`)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
}
export {getDriverInfo, getOldTripList, getCurrentTripList, StartTrip, EndTrip}
