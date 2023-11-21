import axios from 'axios'
import {ConvertStringToObject} from '../../../../../../../_metronic/helpers'
import {DashFuelQueryResponse} from './_models'
const getList = (query, filtter: {type: any}, page: number): Promise<DashFuelQueryResponse> => {
  return axios
  .post(`dashboards_fuel?${'page=' + page}`, {
    ...ConvertStringToObject(query),
    filtter,
  })
  .then((d: any) => {
    return {
      data: d.data?.data?.fuel?.data,
      payload: {
        pagination: {
          page_num: d.data?.data?.fuel?.current_page,
          page_size: d.data?.data?.fuel?.per_page,
          links: d.data?.data?.fuel?.links,
        },
      },
    }
  })
}

export {getList}
