import { number } from 'yup'
import { ID, Response } from '../../../../../../../_metronic/helpers'
export type Vehicle = {
  id?: ID
  "cars_id": number,
  "make_id": number,
  "model_id": number,
  "color_id": number,
  "year"?: number,
  "group_id": number,
  "lic_exp_date": string,
  "reg_exp_date": string,
  "vehicle_image": string,
  "engine_type"?: string,
  "horse_power": number,
  "vin": string,
  "license_plate": string,
  "mileage": number,
  "in_service": boolean,
  "user_id": number,
  "int_mileage": number,
  "type_id": number,
  "type":string,
  "km": number,
  "gps_code": string,
  "status": number,
  "make": string,
  "model": string,
  "displayname": string,
  "color": string,
  "group": string,
  "insurance_number"?: number,
  "documents"?: any,
  "exp_date"?: string,
  "exp_name"?: string,
  "exp_amount"?: number,
  "meta_data": {
    "driver_id": any,
    "average": any,
    "ins_number": any,
    "ins_exp_date": any,
    "udf": any
  }
}


export type VehicleQueryResponse = Response<Array<Vehicle>>




export const initialVehicle: Vehicle = {
  "id": null,
  "cars_id": null,
  "make_id": null,
  "model_id": null,
  "color_id": null,
  "year": null,
  "group_id": null,
  "lic_exp_date": null,
  "reg_exp_date": null,
  "vehicle_image": null,
  "engine_type": null,
  "horse_power": null,
  "vin": null,
  "license_plate": null,
  "mileage": null,
  "in_service": false,
  "user_id": null,
  "int_mileage": null,
  "type_id": null,
  "type":null,
  "km": null,
  "gps_code": null,
  "status": null,
  "make": null,
  "model": null,
  "displayname": null,
  "color": null,
  "group": null,
  "insurance_number": null,
  "documents": null,
  "exp_date": null,
  "exp_name": null,
  "exp_amount": null,
  "meta_data": {
    "driver_id": null,
    "average": null,
    "ins_number": null,
    "ins_exp_date": null,
    "udf": null
  }
}


