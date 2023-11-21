import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import { PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import Add from './manage/add-edit/Add'
import Edit from './manage/add-edit/Edit'
import {Breadcrumbs, ListPath} from './routes/RoutesNames'
import {ManageListWrapper} from './manage/List'
import theme from '../../../../../_metronic/helpers/common/theme'
import AddVehicle from './manage/add-edit/AddVehicle'
import AddAds from './manage/add-edit/AddAds'
const PathPage = () => {
  const intl = useIntl()
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              <Route
                path='manage-path'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'path'})}
                      )}{' '}
                    </PageTitle>
                    <ManageListWrapper />
                  </>
                }
              />
              <Route
                path='add-path'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'path'})}
                      )}
                    </PageTitle>
                    <Add />
                  </>
                }
              />
              <Route
                path='edit-path'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'edit_object'},
                        {name: intl.formatMessage({id: 'path'})}
                      )}
                    </PageTitle>
                    <Edit />
                  </>
                }
              />
             <Route
                path='add-ads'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'ads'})}
                      )}
                    </PageTitle>
                    <AddAds />
                  </>
                }
              />
                 <Route
                path='add-vehicle'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'vehicle'})}
                      )}
                    </PageTitle>
                    <AddVehicle />
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

export default PathPage
