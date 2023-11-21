import { PageLink } from "../../../../../_metronic/layout/core";

const baseRoute = '/driver/account/'

export const DashBoardPath = baseRoute + 'current-trip';

export const CurrentTripsPath = baseRoute + 'current-trip';
export const OldTripsPath = baseRoute + 'old-trip';


export const accountBreadCrumbs: Array<PageLink> = [
    {
      title: 'Account',
      path: '/driver/account/current-trip',
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