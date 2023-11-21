import { ID, Response } from '../../../../../../../_metronic/helpers'


export type CarWorkingTime = {
  id: number,
  start: string,
  end: string,
  title: string
}

export type CarWorkingTimeQueryResponse = Response<Array<CarWorkingTime>>

export const initialCarsTImeModel: CarWorkingTime = {
  id: null,
  start: null,
  end: null,
  title: "test"


}

export type AddCarWorkingTime = {
  shift_id: string,
  vehicles_id: string,
  type: string,
  region_id: string,
  group_id: string,
  date: string


}

export const initialAddCarWorkingTimeModel: AddCarWorkingTime = {
  shift_id: '',
  vehicles_id: '',
  type: '',
  region_id: '',
  group_id: '',
  date: ''
}




