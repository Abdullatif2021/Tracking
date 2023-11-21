import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import {PageLink, PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import AddStation from './manage/add-edit/Add'
import EditStation from './manage/add-edit/Edit'
import {Breadcrumbs, ListPath} from './routes/RoutesNames'
import {ManageListWrapper} from './manage/List'
import MapStationPage from './map/MainPage'
import theme from '../../../../../_metronic/helpers/common/theme'
import ManagePermission from './manage/add-edit/ManagePermission'
import MapCarPage from './car'
import MapTerminalPage from './terminal'

const StationPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Vehicles
              <Route
                path='manage-stations'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'stations'})}
                      )}{' '}
                    </PageTitle>
                    <ManageListWrapper />
                  </>
                }
              />
              <Route
                path='add-station'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'station'})}
                      )}
                    </PageTitle>
                    <AddStation />
                  </>
                }
              />
              <Route
                path='edit-station'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'station'})}
                      )}
                    </PageTitle>
                    <EditStation />
                  </>
                }
              />
              <Route path='map-station' element={<MapStationPage />} />
              <Route path='map-station-car' element={<MapCarPage />} />
              <Route path='map-station-terminal' element={<MapTerminalPage />} />
              <Route
                path='permission-station'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'permission'})}
                      )}
                    </PageTitle>
                    <ManagePermission />
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

export default StationPage
