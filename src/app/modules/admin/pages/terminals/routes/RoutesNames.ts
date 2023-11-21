import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/terminals/'

export const ListPath = baseRoute + 'manage-terminals';
export const AddPath = baseRoute + 'add-terminal';
export const EditPath = baseRoute + 'edit-terminal';
export const MapPath = baseRoute + 'map-terminal';



export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Terminal',
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
