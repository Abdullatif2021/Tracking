import {Localize} from '../../../../../../_metronic/i18n/Localize'
import {PageLink} from '../../../../../../_metronic/layout/core'
const baseRoute = '/admin/reports/'

export const ReplyPath = baseRoute + 'reply-map';
export const ReportTripPath = baseRoute + 'trip-report';
export const ReportEventPath = baseRoute + 'event-report';

export const ReportReasonPath = baseRoute + 'reason-report';
export const ReportStopPath = baseRoute + 'stop-report';

export const ReportTripDriverPath = baseRoute + 'trip-driver-report';

export const ReportTripCustomerPath = baseRoute + 'trip-customer-report';
export const ReporSummeryPath = baseRoute + 'summery-report';

export const ReporShiftDriveryPath = baseRoute + 'shift-driver-report';
export const ReporLogPath = baseRoute + 'log-path-report';
export const ReporLogTerminalm  = baseRoute + 'log-terminal-report';
export const ReporCarOutService = baseRoute + 'car-out-service-report';
export const Breadcrumbs: Array<PageLink> = [
  {
    title: 'Reports',
    path: ReplyPath,
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

export const tripBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Trip Reports',
    path: ReportTripPath,
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

export const eventBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Trip Event',
    path: ReportEventPath,
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


export const stopBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Stop',
    path: ReportStopPath,
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

export const reasonBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Reason',
    path: ReportReasonPath,
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

export const tripDriverBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Trip Driver',
    path: ReportTripDriverPath,
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


export const tripCustomerBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Trip Customer',
    path: ReportTripCustomerPath,
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

export const summeryReportBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Summery Report',
    path: ReporSummeryPath,
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
export const shiftDriverReportBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Shift Driver  Report',
    path: ReporShiftDriveryPath,
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

export const LogPathReportBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Log Path',
    path: ReporShiftDriveryPath,
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

export const LogTerminalReportBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Log Terminal',
    path: ReporShiftDriveryPath,
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
export const CarOutServiceReportBreadcrumbs: Array<PageLink> = [
  {
    title: 'Manage Car Out Service',
    path: ReporShiftDriveryPath,
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