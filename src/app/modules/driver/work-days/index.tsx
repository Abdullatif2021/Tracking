import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {useIntl} from 'react-intl'



import {ManageWorkingDaysWrapper} from './manage-working-drivers/List'
import { PageTitle } from '../../../../_metronic/layout/core'
import { Breadcrumbs, ListPath } from './routes/RoutesNames'


const WorkingDaysDriverPage = () => {
  const intl = useIntl()
  return (
    <>
          <Routes>
            <Route element={<Outlet />}>
              <Route
                path='days'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'working_days'})}
                      )}{' '}
                    </PageTitle>
                    <ManageWorkingDaysWrapper />
                  </>
                }
              />
     
            </Route>
            <Route index element={<Navigate to={ListPath} />} />
          </Routes>

    
    </>
  )
}

export default WorkingDaysDriverPage
