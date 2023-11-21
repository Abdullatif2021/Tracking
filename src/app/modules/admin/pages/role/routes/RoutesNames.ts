import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/roles/'

export const ListRolePath = baseRoute + 'manage-role';
export const AddRolePath = baseRoute + 'add-role';
export const AddPermissionRolePath = baseRoute + 'add-permission-role';

export const EditRolePath = baseRoute + 'edit-role';


export const ListPermissionPath = baseRoute + 'manage-permission';
export const AddPermissionPath = baseRoute + 'add-permission';
export const EditPermissionPath = baseRoute + 'edit-permission';





export const roleBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Role',
    path: ListRolePath,
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
export const permissionBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Permission',
    path: ListPermissionPath,
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
export const permissionRoleBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Permission Role',
    path: ListRolePath,
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
