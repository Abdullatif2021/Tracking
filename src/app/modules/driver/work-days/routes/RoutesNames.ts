import { PageLink } from "../../../../../_metronic/layout/core/PageData";

const baseRoute = 'driver/working/'

export const ListPath = baseRoute + 'days';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Working  Days',
    path: ListPath,
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
