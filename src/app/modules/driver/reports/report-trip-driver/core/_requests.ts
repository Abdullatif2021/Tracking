
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../_metronic/helpers'
import {  TripDriverReport, TripDriverReportQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<TripDriverReportQueryResponse> => {
  return axios
    .post(`report_trip_driver?${'page=' + page}`, {
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



export { getList }
