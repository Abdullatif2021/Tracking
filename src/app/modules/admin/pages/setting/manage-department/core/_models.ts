import { ID, Response } from '../../../../../../../_metronic/helpers'

export type Department = {
  id: number,
  parent :string,
  name: string,
  building_name:string,
  building_id :string,
  floor_number:string
 


}





export type DepartmentQueryResponse = Response<Array<Department>>

export const initialDepartmentModel: Department = {
  id: null,
  name: null,
  parent:null,
  building_name:null,
  building_id:null,
  floor_number:null,
 
}
