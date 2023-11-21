
import axios, { AxiosResponse } from 'axios'

import { WorkingTimeQueryResponse } from './_models'
import { ConvertStringToObject, ID } from '../../../../../../_metronic/helpers'

const getList = (query: string): Promise<WorkingTimeQueryResponse> => {

  return axios
    .post(`my_shift_driver`, {
      ...ConvertStringToObject(query)
    })
    .then((d: any) => {
      return {
        data: d.data?.data.map((item) => {
          return {
            ...item,
            start: new Date(item.time_in),
            end: new Date(item.time_out)
          }

        }),
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



const getEventDetail = (id: ID): Promise<any> => {
  return axios.get(`${'one_shift_driver'}/${id}`).then((res) => res?.data?.data)
}







export { getList, getEventDetail }
