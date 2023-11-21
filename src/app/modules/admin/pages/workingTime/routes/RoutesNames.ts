import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/working-days/'

export const ListWorkingCarsDaysPath = baseRoute + 'manage-cars';
export const AddWorkingCarsPath = baseRoute + 'add-cars-working-days';
export const EditWorkingCarspath = baseRoute + 'edit-cars-working-days';


export const ListWorkingDriversDaysPath = baseRoute + 'manage-drivers';
export const AddWorkingDriversPath = baseRoute + 'add-drivers-working-days';
export const EditWorkingDriverspath = baseRoute + 'edit-drivers-working-days';


export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Working Cars Days',
    path: ListWorkingCarsDaysPath,
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

export const BreadcrumbsDriver: Array<PageLink> = [
  {
    title: 'Manage Working Driver Days',
    path: ListWorkingCarsDaysPath,
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
