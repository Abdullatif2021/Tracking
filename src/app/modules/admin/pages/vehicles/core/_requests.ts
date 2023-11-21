
import axios from 'axios'
import { SelectList } from './_models'

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



export { getMakerList, getColorList, getGroupList, getModelList, getTypeList, getEngineTypeList, getStationList }
