import {Response} from '../../../../../../../_metronic/helpers'

type DashboardVehicle = {
  vehicles_active: number
  vehicles_not_active: number
}

type DashboardUser = {
  count: number
  type: string
}

export type DashboardsInfo = {
  vehicles: DashboardVehicle[]
  users: DashboardUser[]
  session: number
}

export type DashInfoQueryResponse = Response<DashboardsInfo>

export const initialDashboardsInfo: DashboardsInfo = {
  vehicles: [{vehicles_active: 0, vehicles_not_active: 0}],
  users: [{count: 0, type: ''}],
  session: 0,
}
