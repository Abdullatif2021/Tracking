import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import { PageTitle} from '../../../../../_metronic/layout/core'
import {useIntl} from 'react-intl'
import Add from './manage/add-edit/Add'
import Edit from './manage/add-edit/Edit'
import {Breadcrumbs, ListPath} from './routes/RoutesNames'
import {ManageListWrapper} from './manage/List'
import theme from '../../../../../_metronic/helpers/common/theme'
const AdsPage = () => {
  const intl = useIntl()
  return (
    <>
     
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Vehicles
              <Route
                path='manage-ads'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'ads'})}
                      )}{' '}
                    </PageTitle>
                    <ManageListWrapper />
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
                    <Add />
                  </>
                }
              />
              <Route
                path='edit-ads'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'add_object'},
                        {name: intl.formatMessage({id: 'ads'})}
                      )}
                    </PageTitle>
                    <Edit />
                  </>
                }
              />
          
            </Route>
            <Route index element={<Navigate to={ListPath} />} />
          </Routes>
    
    </>
  )
}

export default AdsPage
