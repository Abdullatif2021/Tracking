import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import { PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import AddTrip from './manage/add-edit/Add'
import EditTrip  from './manage/add-edit/Edit'
import {Breadcrumbs, ListPath} from './routes/RoutesNames'
import {ManageListWrapper} from './manage/List'
import theme from '../../../../../_metronic/helpers/common/theme'
const TripPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Vehicles
              <Route
                path='manage-trips'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'trips'})}
                      )}{' '}
                    </PageTitle>
                    <ManageListWrapper />
                  </>
                }
              />
              <Route
                path='add-trip'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'trip'})}
                      )}
                    </PageTitle>
                    <AddTrip />
                  </>
                }
              />
              <Route
                path='edit-trip'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'trip'})}
                      )}
                    </PageTitle>
                    <EditTrip />
                  </>
                }
              />
          
            </Route>
            <Route index element={<Navigate to={ListPath} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default TripPage
