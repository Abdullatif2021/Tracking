import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../../_metronic/layout/core'
import { useIntl } from 'react-intl'

import AddDriver from './manage-driver/add-edit/Add'
import EditDriver from './manage-driver/add-edit/Edit'

import AddUser from './manage-user/add-edit/Add'
import EditUser from './manage-user/add-edit/Edit'

import AddUserType from './manage-user-type/add-edit/Add'
import EditUserType from './manage-user-type/add-edit/Edit'

import { ManageUsertWrapper } from './manage-user/List'
import { ManageUserTypeWrapper } from './manage-user-type/List'

import { ListUserPath, driverBreadcrumbs, userBreadcrumbs } from './routes/RoutesNames'
import { ManageDriverWrapper } from './manage-driver/List'
import { useSelector } from 'react-redux'
import AddPermissionRoleUser from './manage-user/add-edit/AddPermissionRoleUser'
import AddPermissionRoleDriver from './manage-driver/add-edit/AddPermissionRoleDriver'
import AddPermissionRoleType from './manage-user-type/add-edit/AddPermissionRoleType'

const UsersPage = () => {
  const intl = useIntl()
  const userTypes = useSelector((state: any) => state.pageTimeManager?.userTypes)

  return (
    <Routes>
      <Route element={<Outlet />}>
        //#region driver
        <Route
          path='manage-user'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage({ id: 'user' })}
              </PageTitle>
              <ManageUsertWrapper />
            </>
          }
        />
        <Route
          path='add-user'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'user' }) })}
              </PageTitle>
              <AddUser />
            </>
          }
        />
        <Route
          path='add-permission-user'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'permission' }) })}
              </PageTitle>
              <AddPermissionRoleUser />
            </>
          }
        />
        <Route
          path='edit-user'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage({ id: 'edit_object' }, { name: intl.formatMessage({ id: 'user' }) })}{' '}
              </PageTitle>
              <EditUser />
            </>
          }
        />
        <Route
          path='manage-driver'
          element={
            <>
              <PageTitle breadcrumbs={driverBreadcrumbs}>
                {intl.formatMessage({ id: 'driver' })}
              </PageTitle>
              <ManageDriverWrapper />
            </>
          }
        />
        <Route
          path='add-driver'
          element={
            <>
              <PageTitle breadcrumbs={driverBreadcrumbs}>
                {intl.formatMessage({ id: 'add_object' }, { name: intl.formatMessage({ id: 'driver' }) })}
              </PageTitle>
              <AddDriver />
            </>
          }
        />
        <Route
          path='edit-driver'
          element={
            <>
              <PageTitle breadcrumbs={driverBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'edit_object' },
                  { name: intl.formatMessage({ id: 'driver' }) }
                )}{' '}
              </PageTitle>
              <EditDriver />
            </>
          }
        />
        <Route
          path='add-permission-driver'
          element={
            <>
              <PageTitle breadcrumbs={driverBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'permission' }) }
                )}{' '}
              </PageTitle>
              <AddPermissionRoleDriver />
            </>
          }
        />
        <Route
          path='manage-user-type/:id'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage({ id: 'user_type' })}
              </PageTitle>
              <ManageUserTypeWrapper />
            </>
          }
        />
        <Route
          path='add-user-type'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'user_type' }) }
                )}
              </PageTitle>
              <AddUserType />
            </>
          }
        />
        <Route
          path='edit-user-type'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'edit_object' },
                  { name: intl.formatMessage({ id: 'user_type' }) }
                )}{' '}
              </PageTitle>
              <EditUserType />
            </>
          }
        />
        <Route
          path='add-permission-type'
          element={
            <>
              <PageTitle breadcrumbs={userBreadcrumbs}>
                {intl.formatMessage(
                  { id: 'add_object' },
                  { name: intl.formatMessage({ id: 'permission' }) }
                )}
              </PageTitle>
              <AddPermissionRoleType />
            </>
          }
        />

      </Route>

      <Route index element={<Navigate to={ListUserPath} />} />
    </Routes>
  )
}
export default UsersPage
