import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/path/'

export const ListPath = baseRoute + 'manage-path';
export const AddPath = baseRoute + 'add-path';
export const EditPath = baseRoute + 'edit-path';
export const AddAdsPath = baseRoute + 'add-ads';
export const AddVehiclePath = baseRoute + 'add-vehicle';


export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Path',
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
