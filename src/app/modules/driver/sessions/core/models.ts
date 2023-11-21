import { ID,Response } from "../../../../../_metronic/helpers"
export type SessionDriver ={
    id:number,
    start_time:string,
    end_time:string
}
export type MySessionDriver = {
  id: number
  vehicle_name: string
  session: SessionDriver[]
  total_time:string

}
