import { strict } from 'assert'
import { ID, Response } from '../../../../../../../_metronic/helpers'

export enum TripType {
  Internal = 1,
  External = 2,
  Other = 3
}

export const tripTypeList = [
  {
    value: 1,
    text: 'Internal'
  }, {
    value: 2,
    text: 'External'
  }, {
    value: 3,
    text: 'Other'
  }
]
export type Trip = {
  id: ID,
  note:string,
  date: string,
  type: number,
  from_group: string,
  from_building: string,
  from_region:string,
  to_region: string,
  to_group: number,
  to_building: string,
 


}


export type TripQueryResponse = Response<Array<Trip>>

export const initialTrip: Trip = {
  id: null,
  date: null,
  type: null,
  from_group: null,
  from_building: null,
  from_region:null,
  to_region: null,
  to_group: null,
  to_building: null,
  note:null

}
export type Path = {
  from: string,
  to: string,
  cars_id: string,
  other_to: string,
  time_in: string,
  passenger: number[],
  vehicles:any[],
  fromAddresses:any [],
  toAddresses:any []
}
export type AddTrip = {
  type: number,
  date: string,
  note: string,
  toAddresses:string,
  path: Path[],

}

export const initialPath: Path = {
  from:null,
  to: null,
  cars_id: null,
  other_to: null,
  time_in: null,
  passenger: [],
  vehicles:null,
  fromAddresses:null,
  toAddresses:null
}
export const initialAddTrip: AddTrip = {
  date: null,
  type: 1,
  note: null,
  toAddresses:null,
  path: [{
    from: null,
    to: null,
    cars_id: null,
    other_to: null,
    time_in: null,
    passenger: [],
    vehicles:null,
    fromAddresses:null,
    toAddresses:null
  }]


}