import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/stations/'

export const ListPath = baseRoute + 'manage-stations';
export const AddPath = baseRoute + 'add-station';
export const EditPath = baseRoute + 'edit-station';
export const MapPath = baseRoute + 'map-station';
export const MapCarPath = baseRoute + 'map-station-car';
export const MapTerminalPath = baseRoute + 'map-station-terminal';


export const PermissionPath = baseRoute + 'permission-station';

export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Stations',
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
