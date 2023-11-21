import axios, {AxiosResponse} from 'axios'
import {ConvertStringToObject, ID, ResponeApiCheck} from '../../../../../../../_metronic/helpers'
import {RoleResponse, Station, StationQueryResponse} from './_models'
let links = [
  {
    url: null,
    label: '&laquo; Previous',
    active: false,
  },
  {
    url: 'https://tmbo.app/cars/fleet/api/list_vehicles?page=1',
    label: '1',
    active: true,
  },
  {
    url: null,
    label: 'Next &raquo;',
    active: false,
  },
]
const getList = (query: string, page: number): Promise<StationQueryResponse> => {
  return axios
    .post(`list_station?${'page=' + page}`, {
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

// const getList = (): Promise<StationQueryResponse> => {
//   return

//   axios.get(`list_station`)
//   //  .get(`all_station?${'page=' + page}`, {
//     //  ...ConvertStringToObject(query)
//   //  })
//     .then((d: any) => {
//       return {
//         data: d.data?.data,
//      //   payload:{}
//         // {
//         //   pagination: {
//         //     page_num:1, //d.data?.data?.current_page,
//         //     page_size: 10 , //d.data?.data?.per_page,
//         //     links:links
//         //    // d.data?.data?.links
//         //   }
//         // }
//       }
//     })
// }

const create = (object: Station) => {
  return axios
    .post('store_station', object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

const update = (object: Station) => {
  return axios
    .post(`update_station/${object.id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}

const getRoleList = (): Promise<RoleResponse> => {
  return axios.get(`list_role_station`).then((d: any) => {
    return d.data?.data
  })
}

const getPermissionStation = (id :ID): Promise<RoleResponse> => {
  return axios.get(`list_station_permissions/${id}`).then((d: any) => {
    return d.data?.data
  })
}

const updatePermission= (object: any, id) => {
  return axios
    .post(`store_station_permissions/${id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  // .then((response: ResponeApiCheck) => response)
}

//  const destroy = (id: ID): Promise<void> => {
//    return axios.post(`${'destroy_vehicle_color'}/${id}`).then(() => { })
//  }

//  const destroySelectedItems = (selectedIds: Array<ID>): Promise<void> => {
//    const requests = selectedIds.map((id) => axios.post(`${'destroy_vehicle_color'}/${id}`))
//    return axios.all(requests).then(() => { })
//  }

export {getList, create, update,getRoleList,getPermissionStation,updatePermission}
