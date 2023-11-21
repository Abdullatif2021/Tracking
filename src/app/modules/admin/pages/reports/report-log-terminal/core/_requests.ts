
import axios  from 'axios'
import { ConvertStringToObject } from '../../../../../../../_metronic/helpers'
import {  LogTerminalQueryResponse } from './_models'
const getList = (query: string, page: number): Promise<LogTerminalQueryResponse> => {
  return axios
    .post(`log_terminal?${'page=' + page}`, {
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
