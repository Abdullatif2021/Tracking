import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import {PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import AddWorkingCar from './manage-working-cars/add-edit/Add'
import EditWorkingCar from './manage-working-cars/add-edit/Edit'
import {Breadcrumbs, BreadcrumbsDriver, ListWorkingCarsDaysPath} from './routes/RoutesNames'
import {ManageWorkingCarsDaysWrapper} from './manage-working-cars/List'

import AddWorkingDriver from './manage-working-drivers/add-edit/Add'
import EditWorkingDRiver from './manage-working-drivers/add-edit/Edit'
import {ManageWorkingDriversDaysWrapper} from './manage-working-drivers/List'

import theme from '../../../../../_metronic/helpers/common/theme'
const WorkingDaysPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Cars
              <Route
                path='manage-cars'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'cars_working_days'})}
                      )}{' '}
                    </PageTitle>
                    <ManageWorkingCarsDaysWrapper />
                  </>
                }
              />
              <Route
                path='add-cars-working-days'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'cars_working_days'})}
                      )}
                    </PageTitle>
                    <AddWorkingCar />
                  </>
                }
              />
              <Route
                path='edit-cars-working-days'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'cars_working_days'})}
                      )}
                    </PageTitle>
                    <EditWorkingCar />
                  </>
                }
              />
              //#endregion 
              //#region Drivers
              <Route
                path='manage-drivers'
                element={
                  <>
                    <PageTitle breadcrumbs={BreadcrumbsDriver}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'drivers_working_days'})}
                      )}{' '}
                    </PageTitle>
                    <ManageWorkingDriversDaysWrapper />
                  </>
                }
              />
              <Route
                path='add-drivers-working-days'
                element={
                  <>
                    <PageTitle breadcrumbs={BreadcrumbsDriver}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'drivers_working_days'})}
                      )}
                    </PageTitle>
                    <AddWorkingDriver />
                  </>
                }
              />
              <Route
                path='edit-drivers-working-days'
                element={
                  <>
                    <PageTitle breadcrumbs={BreadcrumbsDriver}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'drivers_working_days'})}
                      )}
                    </PageTitle>
                    <EditWorkingDRiver />
                  </>
                }
              />
              //#endregion
            </Route>
            <Route index element={<Navigate to={ListWorkingCarsDaysPath} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default WorkingDaysPage
