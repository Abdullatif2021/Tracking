import { lazy, } from 'react'
import {  Navigate,  RouteProps } from 'react-router-dom'
import { SuspensedView } from '../../_metronic/helpers/components/SuspensedView'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'

const TripPage = lazy(() => import('../modules/admin/pages/trips'))
const WorkingDaysPage = lazy(() => import('../modules/admin/pages/workingTime'))
const SettingPage = lazy(() => import('../modules/admin/pages/setting'))
const AdsPage = lazy(() => import('../modules/admin/pages/ads'))
const UsersPage = lazy(() => import('../modules/admin/pages/users'))

const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
const VechilesPage = lazy(() => import('../modules/admin/pages/vehicles'))
const StationPage = lazy(() => import('../modules/admin/pages/stations'))

const PublicMapPage = lazy(() => import('../modules/admin/pages/publicMap/map'))
const ReportsPage = lazy(() => import('../modules/admin/pages/reports/Index'))
const TerminalListPage = lazy(() => import('../modules/admin/pages/terminals'))
const PathPage = lazy(() => import('../modules/admin/pages/path'))
const RolePage = lazy(() => import('../modules/admin/pages/role'))

const LiveVedioPage = lazy(() => import('../modules/admin/pages/vedio-stream'))
const CameraPage = lazy(() => import('../modules/admin/pages/camera'))
const CarOutServicePage = lazy(() => import('../modules/admin/pages/car-out-service'))
const FuelHistoryPage = lazy(() => import('../modules/admin/pages/fuel-history'))

export const adminRoutes: (RouteProps & { permission?: string | null })[] = [
    { path: 'dashboard', element: <DashboardWrapper />, permission: 'admin' },
    { path: 'auth/*', element: <Navigate to='/dashboard' />, permission: 'admin' },
    {
        path: 'crafted/pages/profile/*',
        element: (
            <SuspensedView>
                <ProfilePage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: 'crafted/pages/wizards/*',
        element: (
            <SuspensedView>
                <WizardsPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: 'crafted/widgets/*',
        element: (
            <SuspensedView>
                <WidgetsPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: 'crafted/account/*',
        element: (
            <SuspensedView>
                <AccountPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: 'apps/chat/*',
        element: (
            <SuspensedView>
                <ChatPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/vehicles/*',
        element: (
            <SuspensedView>
                <VechilesPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/stations/*',
        element: (
            <SuspensedView>
                <StationPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/terminals/*',
        element: (
            <SuspensedView>
                <TerminalListPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/trips/*',
        element: (
            <SuspensedView>
                <TripPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/reports/*',
        element: (
            <SuspensedView>
                <ReportsPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/public-map/*',
        element: (
            <SuspensedView>
                <PublicMapPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/working-days/*',
        element: (
            <SuspensedView>
                <WorkingDaysPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/setting/*',
        element: (
            <SuspensedView>
                <SettingPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/path/*',
        element: (
            <SuspensedView>
                <PathPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/ads/*',
        element: (
            <SuspensedView>
                <AdsPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/users/*',
        element: (
            <SuspensedView>
                <UsersPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },


    {
        path: '/admin/roles/*',
        element: (
            <SuspensedView>
                <RolePage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    // {
    //     path: '/admin/live-vedio',
    //     element: (
    //         <SuspensedView>
    //             <LiveVedioPage />
    //         </SuspensedView>
    //     ),
    //     permission: 'admin',
    // },
    {
        path: '/admin/camera/*',
        element: (
            <SuspensedView>
                <CameraPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/car-out-service/*',
        element: (
            <SuspensedView>
                <CarOutServicePage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    {
        path: '/admin/fuel-history/*',
        element: (
            <SuspensedView>
                <FuelHistoryPage />
            </SuspensedView>
        ),
        permission: 'admin',
    },
    



];







