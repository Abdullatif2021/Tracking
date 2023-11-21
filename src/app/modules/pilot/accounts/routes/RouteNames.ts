import { PageLink } from "../../../../../_metronic/layout/core";

const baseRoute = '/pilot/account/'

export const ListPath = baseRoute + 'current-trip';

export const AddTripPath = baseRoute + 'add-trip';
export const UpdateProfilePath=baseRoute + 'update-profile'



export const accountBreadCrumbs: Array<PageLink> = [
    {
      title: 'Trips',
      path: '/pilot/account/current-trip',
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