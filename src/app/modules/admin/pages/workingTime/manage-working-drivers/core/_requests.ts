
import axios, { AxiosResponse } from 'axios'
import { ConvertStringToObject, ID, ResponeApiCheck, SelectList, } from '../../../../../../../_metronic/helpers'
import { AddDriverWorkingTime,  CarWorkingTimeQueryResponse } from './_models'
const getList = (query: string): Promise<CarWorkingTimeQueryResponse> => {

  return axios
    .post(`all_shift_driver`, {
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

const create = (object: any) => {
  return axios
    .post('store_shift_driver', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const dublicate = (object: any) => {
  return axios.post(`duplicate_shift_driver`, {shift_id:object?.event?.id , date : object?.date})
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}

const update = (object: any,id:ID) => {
  return axios.post(`update_shift_driver/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}


const destroy = (id: ID): Promise<void> => {
  return axios.post(`${'destroy_terminal'}/${id}`).then(() => { })
}

const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
  const requests = selectedIds.map((id) => axios.post(`${'destroy_terminal'}/${id}`))
  return axios.all(requests).then(() => { })
}

const getEventDetail = (id: ID): Promise<any> => {
  return axios.get(`${'one_shift_driver'}/${id}`).then((res) => res?.data?.data)
}





const getShitEdit = (shift_id:ID): Promise<AddDriverWorkingTime> => {
  return axios
      .get(`edit_shift_driver/${shift_id}`)
      .then((d: any) => {
          return d.data?.data
      })
}



export { getList, destroy, destroySelectedItems, create, update,dublicate, getEventDetail ,getShitEdit}
