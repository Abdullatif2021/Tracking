import React from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { AccountHeader } from './AccountHeader'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { ListPath, accountBreadCrumbs } from './routes/RouteNames'
import { ManageCurrentTripListWrapper } from './components/current-trip/List'
import AddTrip from './components/current-trip/add-trip/Add'
import { useIntl } from 'react-intl'
import UpdateProfile from './components/update-profile/Edit'
const AccountPilotPage: React.FC = () => {
  const intl = useIntl()
  return (
    <Routes>
      <Route
        element={
          <div>
            {<AccountHeader />}
            <Outlet />
          </div>
        }
      >
        <Route
          path='current-trip'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>
                {intl.formatMessage(
                  { id: 'manage_object' },
                  { name: intl.formatMessage({ id: 'trips' }) }
                )}
              </PageTitle>
              <ManageCurrentTripListWrapper />
            </>
          }
        />
        <Route
          path='add-trip'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}> {intl.formatMessage(
                { id: 'add_object' },
                { name: intl.formatMessage({ id: 'trip' }) }
              )}</PageTitle>
              <AddTrip />
            </>
          }
        />

        <Route
          path='update-profile'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}> {intl.formatMessage(
                { id: 'update_object' },
                { name: intl.formatMessage({ id: 'profile' }) }
              )}</PageTitle>
              <UpdateProfile />
            </>
          }
        />

        <Route index element={<Navigate to={ListPath} />} />
      </Route>
    </Routes>
  )
}

export default AccountPilotPage
