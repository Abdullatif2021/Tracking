import {ID, Response} from '../../../../../../../_metronic/helpers'

export type MaintenanceStatus = {
  id: number
  parent: string
  name: string
  type: string
  type_value: string
}

export type MaintenanceStatusQueryResponse = Response<Array<MaintenanceStatus>>

export const initialMaintenanceStatusModel: MaintenanceStatus = {
  id: null,
  parent: null,
  name: null,
  type: null,
  type_value: null,
}

export const MaintenanceStatusTypes = [
  {
    value: 'months',
    text: 'month(s)',
  },
  {
    value: 'kilometers',
    text: 'Number kilometers',
  },
]
