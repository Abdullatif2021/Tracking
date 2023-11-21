import { ID, Response } from "../../../../../_metronic/helpers"

export type PilotInfo = {
  id: number
  name: string
  email: string
  mobile: string,
  gender:string


}

export type TripDriver = {
  id: ID,
  trip_id: ID,
  note: string,
  date: string,
  type: number,
  from: string,
  to: string,
  status: number,
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


export enum PilotrStatus {
  in_Progress = 0,
  cancel =5,

}
export type AddTrip = {
  "type": number,
  "date": string,
  "note": string,
  "from": string,
  "to": string,
  "vehicles": string,
  "other_to": string,
  "time_in": string
}
export const initialAddTrip: AddTrip = {
  "type": null,
  "date": null,
  "note": null,
  "from": null,
  "to": null,
  "vehicles": null,
  "other_to": null,
  "time_in": null

}