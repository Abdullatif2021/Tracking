import { ID, Response } from '../../../../../../../_metronic/helpers'


export type DriverWorkingTime = {
  id: number,
  start: string,
  end: string,
  title: string
}

export type CarWorkingTimeQueryResponse = Response<Array<DriverWorkingTime>>

export const initialCarsTImeModel: DriverWorkingTime = {
  id: null,
  start: null,
  end: null,
  title: "test"


}

export type AddDriverWorkingTime = {
  shift_id: string,
  driver_id: string,
  type: string,
  region_id: string,
  group_id: string,
  date: string


}

export const initialAddDriverWorkingTime: AddDriverWorkingTime = {
  shift_id: '',
  driver_id: '',
  type: '',
  region_id: '',
  group_id: '',
  date: ''
}




