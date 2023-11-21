import { PageLink } from "../../../../../_metronic/layout/core/PageData";

const baseRoute = '/driver/trips/'

export const TripWithStatusPath = baseRoute ;

export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Trips',
    path: TripWithStatusPath,
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]
