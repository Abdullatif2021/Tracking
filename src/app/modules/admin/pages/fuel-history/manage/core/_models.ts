import { ID, Response } from '../../../../../../../_metronic/helpers'
export type FuelHistory = {
  id: number
  vehicles_id: string,
  date: string,
  qty:string,
  cost_per_unit:string,
  consumption:string,
  image:string,
  province:string,
  start_meter:string,
  end_meter:string
  vehicle_data:any
}
export type FuelHistoryQueryResponse = Response<Array<FuelHistory>>

export type CarOutService = {
  id: number
  vehicles_id: string,
  start: string,
  end:string

}

export type AddFuel ={
  "id":number,
  "vehicle_id":number,
  "date":string
  "start_meter":string,
  "reference":string,
  "province":string,
  "image":string,
  "note":string,
  "complete":number,
  "fuel_from":string,
  "qty":string,
  "cost_per_unit":string
}
export const initialAddFuelModel: AddFuel = {
  "id":null,
  "vehicle_id":null,
  "date":null,
  "start_meter":null,
  "reference":null,
  "province":null,
  "image":null,
  "note":null,
  "complete":1,
  "fuel_from":null,
  "qty":"0.00",
  "cost_per_unit":"0.00"
}

