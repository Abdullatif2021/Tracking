import {ID, Response} from '../../../../../../../_metronic/helpers'

export type Maintenance = {
  id: number
  parent: string
  name: string
  type: string
  type_value: string
}

export type MaintenanceStatusQueryResponse = Response<Array<Maintenance>>

export const initialMaintenanceStatusModel: Maintenance = {
  id: null,
  parent: null,
  name: null,
  type: null,
  type_value: null,
}

export const MaintenanceStatusTypes = [
  {
    value: 1,
    text: 'months',
  },
  {
    value: 2,
    text: 'Number kilometers',
  },
]
