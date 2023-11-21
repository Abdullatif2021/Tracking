import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/ads/'

export const ListPath = baseRoute + 'manage-ads';
export const AddPath = baseRoute + 'add-ads';
export const EditPath = baseRoute + 'edit-ads';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Ads',
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
