import axios from 'axios'
import {ConvertStringToObject} from '../../../../../../../_metronic/helpers'
import {DashCarOutOfServiceQueryResponse} from './_models'

const getList = (
  query,
  filtter: {type: any},
  page: number
): Promise<DashCarOutOfServiceQueryResponse> => {
  return axios
  .post(`dashboards_car_out_of_service?${'page=' + page}`, {
    ...ConvertStringToObject(query),
    filtter,
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

export {getList}
