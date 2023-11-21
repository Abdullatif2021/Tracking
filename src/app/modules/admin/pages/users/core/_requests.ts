
import axios, { AxiosResponse } from 'axios'
import { SelectList } from './_models'
import { ID, ResponeApiCheck } from '../../../../../../_metronic/helpers'

const getMakerList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_vehicles_maker`)
    .then((d: any) => {
      return d.data?.data
    })
}

const getColorList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_vehicles_color`)
    .then((d: any) => {
      return d.data?.data
    })
}

const getModelList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_vehicles_model`)
    .then((d: any) => {
      return d.data?.data
    })
}

const getGroupList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_vehicles_group`)
    .then((d: any) => {
      return d.data?.data
    })
}


const getTypeList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_vehicles_type`)
    .then((d: any) => {
      return d.data?.data
    })
}


const getEngineTypeList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_engine_type`)
    .then((d: any) => {
      return d.data?.data
    })
}

const getStationList = (): Promise<SelectList[]> => {
  return axios
    .get(`all_station`)
    .then((d: any) => {
      return d.data?.data
    }
    )
}

const getPermissionRoles = (): Promise<any> => {
  return axios
    .get(`list_roles_permissions`)
    .then((d: any) => {
      return d.data?.data
    }
    )
}

const getPermissionRolesByUsers = (user_id:ID): Promise<any> => {
  return axios
    .get(`my_roles_users/${user_id}`)
    .then((d: any) => {
      return d.data?.data
    }
    )
}
const addPermissionToUser = (object: any,user_id:ID) => {
  return axios
    .post(`store_roles_users/${user_id}`, object)
    .then((response: AxiosResponse<ResponeApiCheck>) => response.data)
  //.then((response: Response<VehicleType>) => response.data)
}

export { getMakerList, getColorList, getGroupList, getModelList, getTypeList, getEngineTypeList, getStationList,getPermissionRoles ,addPermissionToUser,getPermissionRolesByUsers}
