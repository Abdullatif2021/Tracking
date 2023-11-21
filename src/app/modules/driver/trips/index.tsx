import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import { PageTitle } from '../../../../_metronic/layout/core'
import { Breadcrumbs, TripWithStatusPath } from './routes/RoutesNames'
import { ManageTripListWrapper } from './List'


const TripsDriverPage = () => {
  const intl = useIntl()
  return (
    <>
          <Routes>
            <Route element={<Outlet />}>
              <Route
                path=':id'
                element={
                  <>
                    <PageTitle breadcrumbs={Breadcrumbs}>
                      {intl.formatMessage(
                        {id: 'manage_object'},
                        {name: intl.formatMessage({id: 'trips'})}
                      )}{' '}
                    </PageTitle>
                    <ManageTripListWrapper />
                  </>
                }
              />
     
            </Route>
            <Route index element={<Navigate to={TripWithStatusPath} />} />
          </Routes>

    
    </>
  )
}

export default TripsDriverPage
