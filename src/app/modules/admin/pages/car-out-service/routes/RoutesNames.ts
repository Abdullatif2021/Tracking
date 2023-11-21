import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/car-out-service/'

export const ListPath = baseRoute + 'manage-car-out-service';
export const AddPath = baseRoute + 'add-car-out-service';
export const EditPath = baseRoute + 'edit-car-out-service';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Car Out Service',
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
