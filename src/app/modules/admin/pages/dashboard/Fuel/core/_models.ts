import {ID, Response} from '../../../../../../../_metronic/helpers'

export type FuelData = {
  license_plate: string
  cost_liter: number
  qty: number
  date: string
  total_cost: number
}

type FuelLinks = {
  url: string | null
  label: string
  active: boolean
}

type Fuel = {
  current_page: number
  data: FuelData[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: FuelLinks[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}
type DashboardsFuel = {
  fuel: Fuel
}

export type DashFuelQueryResponse = Response<Array<FuelData>>

export const initialDashboardsFuel: DashboardsFuel = {
  fuel: {
    current_page: 1,
    data: [],
    first_page_url: '',
    from: 0,
    last_page: 0,
    last_page_url: '',
    links: [],
    next_page_url: null,
    path: '',
    per_page: 0,
    prev_page_url: null,
    to: 0,
    total: 0,
  },
}
