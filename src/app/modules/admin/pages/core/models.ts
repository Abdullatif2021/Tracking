import { Response } from "../../../../../_metronic/helpers"
export type SelectList = {
  value: any,
  text: string,

}

export type SelectListQueryResponse = Response<Array<SelectList>>

export const initialVehicleModel: SelectList = {
  "value": null,
  "text": null

}

export const  genders = [

  {
    "value": 1,
    "text": 'Male'
  
  },
  {
    "value": 2,
    "text": 'Female'
  
  }
]
export enum genderEnum {
  Male = 1,
  Female = 2
}