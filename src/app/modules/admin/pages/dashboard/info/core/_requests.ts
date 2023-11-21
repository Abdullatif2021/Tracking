import axios from 'axios'
import {ConvertStringToObject} from '../../../../../../../_metronic/helpers'
import {DashInfoQueryResponse} from './_models'

const getDashInfo = (query: string, page: number): Promise<DashInfoQueryResponse> => {
  return axios
  .post(`dashboards_info?${'page=' + page}`, {
    ...ConvertStringToObject(query),
  })
  .then((d: any) => {
    return {
      data: d.data?.data,
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


export {getDashInfo}
