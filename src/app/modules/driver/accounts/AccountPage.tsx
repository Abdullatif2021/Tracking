import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {AccountHeader} from './AccountHeader'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {CurrentTripsPath, accountBreadCrumbs} from './routes/RouteNames'
import {ManageCurrentTripListWrapper} from './components/current-trip/List'
import { ManageOldTripListWrapper } from './components/old-trip/List'
import { useIntl } from 'react-intl'

const AccountDriverPage: React.FC = () => {
  const intl=useIntl()
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='current-trip'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}> {intl.formatMessage({id:'current_trip'})}</PageTitle>
              <ManageCurrentTripListWrapper />
            </>
          }
        />
        <Route
          path='old-trip'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>{intl.formatMessage({id:'old_trip'})}</PageTitle>
              <ManageOldTripListWrapper />
            </>
          }
        />
        <Route index element={<Navigate to={CurrentTripsPath} />} />
      </Route>
    </Routes>
  )
}

export default AccountDriverPage
