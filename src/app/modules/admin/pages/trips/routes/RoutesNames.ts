import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/trips/'
export const ListPath = baseRoute + 'manage-trips';
export const AddPath = baseRoute + 'add-trip';
export const EditPath = baseRoute + 'edit-trip';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Trip',
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
