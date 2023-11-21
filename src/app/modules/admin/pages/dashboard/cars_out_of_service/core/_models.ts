import {ID, Response} from '../../../../../../../_metronic/helpers'

type CarOutOfServiceModel = {
  current_page: number
  data: CarOutOfServiceData[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: CarOutOfServiceLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export type CarOutOfServiceData = {
  license_plate: string
  start: Date
  end: Date
}

type CarOutOfServiceLink = {
  url: string | null
  label: string
  active: boolean
}

export type DashboardsCarOutOfService = {
  car_out_of_service_start: CarOutOfServiceModel
  car_out_of_service_end: CarOutOfServiceModel
}

export type DashCarOutOfServiceQueryResponse = Response<DashboardsCarOutOfService>

export const initDashboardsCarOutOfService: DashboardsCarOutOfService = {
  car_out_of_service_start: {
    current_page: 0,
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
  car_out_of_service_end: {
    current_page: 0,
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
