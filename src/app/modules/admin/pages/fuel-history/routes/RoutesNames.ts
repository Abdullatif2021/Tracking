import {Localize} from '../../../../../../_metronic/i18n/Localize'
import { intlNonCom } from '../../../../../../_metronic/i18n/i18nProvider';
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/fuel-history/'

export const ListPath = baseRoute + 'manage-fuel-history';
export const AddPath = baseRoute + 'add-fuel-history';
export const EditPath = baseRoute + 'edit-fuel-history';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: intlNonCom.formatMessage(
      {id: 'manage_object'},
      {name: intlNonCom.formatMessage({id: 'fuel_history'})}
    ),
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
