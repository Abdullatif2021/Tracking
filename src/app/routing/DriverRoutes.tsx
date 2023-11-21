
import { lazy, } from 'react'
import {  Navigate, RouteProps } from 'react-router-dom'
import { SuspensedView } from '../../_metronic/helpers/components/SuspensedView'
import { ReportTripDriver } from '../modules/driver/reports/report-trip-driver/List';
const AccountDriverPage = lazy(() => import('../modules/driver/accounts/AccountPage'))
const SessionDriverPage = lazy(() => import('../modules/driver/sessions/SessionPage'))
const WorkingDaysDriverPage = lazy(() => import('../modules/driver/work-days'))


export const driverRoutes: (RouteProps & { permission?: string | null })[] = [
    { path: 'auth/*', element: <Navigate to='/driver/account/' />, permission: 'driver' },
    {
        path: 'driver/account/*',
        element: (
            <SuspensedView>
                <AccountDriverPage />
            </SuspensedView>
        ),
        permission: 'driver',
    },
    {
        path: 'driver/session',
        element: (
            <SuspensedView>
                <SessionDriverPage />
            </SuspensedView>
        ),
        permission: 'driver',
    },
    {
        path: 'driver/report',
        element: (
            <SuspensedView>
                <ReportTripDriver />
            </SuspensedView>
        ),
        permission: 'driver',
    },
    {
        path: 'driver/working/*',
        element: (
            <SuspensedView>
                <WorkingDaysDriverPage />
            </SuspensedView>
        ),
        permission: 'driver',
    },



];



