import { ID,Response } from "../../../../../_metronic/helpers"

export type DriverInfo = {
  id: number
  name: string
  email: string
  phone: string,
  emp_id:string,
  license_number:string,
  issue_date:string,
  exp_date:string,
  contract_number:string

}

export type TripDriver = {
    id: ID,
    trip_id:ID,
    note:string,
    date: string,
    type: number,
    from: string,
    to: string,
    status:number,
    from_region: string,
    from_group: string,
    from_building: string,
    to_group: string,
    to_building: string,
    to_region: string
  }
  export type TripDriverQueryResponse = Response<Array<TripDriver>>

  export enum TripType {
    Internal = 1,
    External = 2,
    Other = 3
  }


  export enum DriverStatus {
    in_Progress=0,
    done=1,
    cancel=2,
    end=4
  }