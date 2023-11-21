import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { ThemeProvider, StyledEngineProvider } from '@mui/material'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'

import {
  CarOutServiceReportBreadcrumbs,
  LogPathReportBreadcrumbs,
  LogTerminalReportBreadcrumbs,
  ReplyPath,
  eventBreadcrumbs,
  reasonBreadcrumbs,
  shiftDriverReportBreadcrumbs,
  stopBreadcrumbs,
  summeryReportBreadcrumbs,
  tripBreadcrumbs,
  tripCustomerBreadcrumbs,
  tripDriverBreadcrumbs,
} from './routes/RoutesName'
import theme from '../../../../../_metronic/helpers/common/theme'
import { ReportTripWrapper } from './trip-report/List'
import ReplayMap from './map-reply/replyMap'
import { ReportEventWrapper } from './report-event/List'
import { ReportStopWrapper } from './report-stop/List'
import { ReportReasonWrapper } from './reason_report/List'
import { ReportTripDriverWrapper } from './report-trip-driver/List'
import { ReportTripCustomerWrapper } from './report-trip-customer/List'
import { SummeryReportWrapper } from './summery-report/List'
import { ShiftDriverReportWrapper } from './report-shift-driver/List'
import { LogPathReportWrapper } from './report-log-path/List'
import { LogTerminalReportWrapper } from './report-log-terminal/List'
import { CarOutServiceReportWrapper } from './report-car-out-service/List'

const ReportsPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Vehicles
              <Route
                path='reply-map'
                element={
                  <>
                    <ReplayMap />
                  </>
                }
              />
              <Route
                path='trip-report'
                element={
                  <>
                    <PageTitle breadcrumbs={tripBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'trip_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportTripWrapper />
                  </>
                }
              />
              <Route
                path='event-report'
                element={
                  <>
                    <PageTitle breadcrumbs={eventBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'event_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportEventWrapper />
                  </>
                }
              />
              <Route
                path='stop-report'
                element={
                  <>
                    <PageTitle breadcrumbs={stopBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'stop_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportStopWrapper />
                  </>
                }
              />
              <Route
                path='reason-report'
                element={
                  <>
                    <PageTitle breadcrumbs={reasonBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'reason_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportReasonWrapper />
                  </>
                }
              />
              <Route
                path='trip-driver-report'
                element={
                  <>
                    <PageTitle breadcrumbs={tripDriverBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'trip_driver_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportTripDriverWrapper />
                  </>
                }
              />
              <Route
                path='trip-customer-report'
                element={
                  <>
                    <PageTitle breadcrumbs={tripCustomerBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'trip_customer_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ReportTripCustomerWrapper />
                  </>
                }
              />
              <Route
                path='summery-report'
                element={
                  <>
                    <PageTitle breadcrumbs={summeryReportBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'summery_report' }) }
                      )}{' '}
                    </PageTitle>
                    <SummeryReportWrapper />
                  </>
                }
              />
              <Route
                path='shift-driver-report'
                element={
                  <>
                    <PageTitle breadcrumbs={shiftDriverReportBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'shift_driver_report' }) }
                      )}{' '}
                    </PageTitle>
                    <ShiftDriverReportWrapper />
                  </>
                }
              />

              <Route
                path='log-path-report'
                element={
                  <>
                    <PageTitle breadcrumbs={LogPathReportBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'log_path_report' }) }
                      )}{' '}
                    </PageTitle>
                    <LogPathReportWrapper />
                  </>
                }
              />
              <Route
                path='log-terminal-report'
                element={
                  <>
                    <PageTitle breadcrumbs={LogTerminalReportBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'log_terminal_report' }) }
                      )}{' '}
                    </PageTitle>
                    <LogTerminalReportWrapper />
                  </>
                }
              />
              <Route
                path='car-out-service-report'
                element={
                  <>
                    <PageTitle breadcrumbs={CarOutServiceReportBreadcrumbs}>
                      {intl.formatMessage(
                        { id: 'manage_object' },
                        { name: intl.formatMessage({ id: 'car_out_service' }) }
                      )}{' '}
                    </PageTitle>
                    <CarOutServiceReportWrapper />
                  </>
                }
              />
            </Route>

            <Route index element={<Navigate to={ReplyPath} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default ReportsPage
