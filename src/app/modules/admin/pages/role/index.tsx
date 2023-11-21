import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import {PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import AddRole from './manage-role/add-edit/Add'
import EditRole from './manage-role/add-edit/Edit'

import AddPermission from './manage-permission/add-edit/Add'
import EditPermisssion from './manage-permission/add-edit/Edit'

import {roleBreadcrumbs, permissionBreadcrumbs, ListRolePath, permissionRoleBreadcrumbs} from './routes/RoutesNames'
import {ManageRoleListWrapper} from './manage-role/List'
import {ManagePermissionListWrapper} from './manage-permission/List'
import theme from '../../../../../_metronic/helpers/common/theme'
import AddPermissionRole from './manage-role/add-edit/AddPermissionRole'
const RolePage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Roles
              <Route
                path='manage-role'
                element={
                  <>
                    <PageTitle breadcrumbs={roleBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'role'})}
                      )}{' '}
                    </PageTitle>
                    <ManageRoleListWrapper />
                  </>
                }
              />
              <Route
                path='add-role'
                element={
                  <>
                    <PageTitle breadcrumbs={roleBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'role'})}
                      )}
                    </PageTitle>
                    <AddRole />
                  </>
                }
              />
              <Route
                path='edit-role'
                element={
                  <>
                    <PageTitle breadcrumbs={roleBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'role'})}
                      )}
                    </PageTitle>
                    <EditRole />
                  </>
                }
              />
              <Route
                path='add-permission-role'
                element={
                  <>
                    <PageTitle breadcrumbs={permissionRoleBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'permission'})}
                      )}
                    </PageTitle>
                    <AddPermissionRole />
                  </>
                }
              />
              //#endregion //#region Manage Permission
              <Route
                path='manage-permission'
                element={
                  <>
                    <PageTitle breadcrumbs={permissionBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'permission'})}
                      )}{' '}
                    </PageTitle>
                    <ManagePermissionListWrapper />
                  </>
                }
              />
              <Route
                path='add-permission'
                element={
                  <>
                    <PageTitle breadcrumbs={permissionBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'permission'})}
                      )}
                    </PageTitle>
                    <AddPermission />
                  </>
                }
              />
              <Route
                path='edit-permission'
                element={
                  <>
                    <PageTitle breadcrumbs={permissionBreadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'permission'})}
                      )}
                    </PageTitle>
                    <EditPermisssion />
                  </>
                }
              />
              //#endregion
            </Route>
            <Route index element={<Navigate to={ListRolePath} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default RolePage
