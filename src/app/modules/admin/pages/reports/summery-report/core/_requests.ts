
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, } from '../../../../../../../_metronic/helpers'
import {  TripCustomerReportQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<TripCustomerReportQueryResponse> => {
  return axios
    .post(`report_summary?${'page=' + page}`, {
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
