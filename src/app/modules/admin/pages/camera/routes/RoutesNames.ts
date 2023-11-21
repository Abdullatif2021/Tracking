import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/camera/'

export const ListPath = baseRoute + 'manage-camera';
export const AddCameraVehiclePath = baseRoute + 'add-camera-vehicle';
export const ViewCameraVehiclePath = baseRoute + 'view-camera-vehicle';




export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Camera',
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
