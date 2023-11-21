import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import { PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import Add from './manage/add-edit/Add'
import {Breadcrumbs, ListPath} from './routes/RoutesNames'
import {ManageListWrapper} from './manage/List'
import theme from '../../../../../_metronic/helpers/common/theme'
import ViewCameraVehicle from './manage/view'
const CameraPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              <Route
                path='manage-camera'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'camera'})}
                      )}{' '}
                    </PageTitle>
                    <ManageListWrapper />
                  </>
                }
              />
              <Route
                path='add-camera-vehicle'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'camera'})}
                      )}
                    </PageTitle>
                    <Add />
                  </>
                }
              />
                 <Route
                path='view-camera-vehicle'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'camera'})}
                      )}
                    </PageTitle>
                    <ViewCameraVehicle />
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

export default CameraPage
