import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import { useAuth } from '../modules/auth'
import { UserType } from '../../_metronic/utlis/constants'
import { CarPage } from '../modules/car'
import AccountPilotPage from '../modules/pilot/accounts/AccountPage'
import { SuspensedView } from '../../_metronic/helpers/components/SuspensedView'
import TerminalPage from '../modules/terminal/TerminalPage'
import { adminRoutes } from './AdminRoutes'
import { driverRoutes } from './DriverRoutes'

const PrivateRoutes = () => {
  const { currentUser } = useAuth()

  return (
    <Routes>
      {currentUser?.type == UserType.ADMIN && (

        <Route element={<MasterLayout />}>
          {adminRoutes.map((route, index) => {
            if (route.permission == 'admin') {
              return (
                <Route key={index} {...route} />
              )
            }
          })}
        </Route>




      )}
      {currentUser?.type == UserType.DRIVER && (
        <Route element={<MasterLayout />}>
          {driverRoutes.map((route, index) => {
            if (route.permission == 'driver') {
              return (
                <Route key={index} {...route} />
              )
            }
          })}

        </Route>
      )}
      {(currentUser?.type == UserType.OTHER) && (
        <Route element={<MasterLayout />}>
          <Route path='auth/*' element={<Navigate to='/pilot/account/' />} />
          <Route
            path='pilot/account/*'
            element={
              <SuspensedView>
                <AccountPilotPage />
              </SuspensedView>
            }
          ></Route>
        </Route>
      )}
      //#endregion //#region Car
      {(currentUser?.type == UserType.CAR || currentUser?.type == UserType.ADMIN) && (
        <Route path='auth/*' element={<Navigate to='/car' />} />
      )}
      {(currentUser?.type == UserType.CAR || currentUser?.type == UserType.ADMIN) && (
        <Route path='/' element={<Navigate to='/car' />} />
      )}
      {(currentUser?.type == UserType.CAR || currentUser?.type == UserType.ADMIN) && (
        <Route
          path='car/*'
          element={
            <SuspensedView>
              <CarPage />
            </SuspensedView>
          }
        ></Route>
      )}
      //#endregion //#region Terminal
      {(currentUser?.type == UserType.TERMINAL || currentUser?.type == UserType.ADMIN) && (
        <Route path='auth/*' element={<Navigate to='/terminal' />} />
      )}
      {(currentUser?.type == UserType.TERMINAL || currentUser?.type == UserType.ADMIN) && (
        <Route path='/' element={<Navigate to='/terminal' />} />
      )}
      {(currentUser?.type == UserType.TERMINAL || currentUser?.type == UserType.ADMIN) && (
        <Route
          path='terminal/*'
          element={
            <SuspensedView>
              <TerminalPage />
            </SuspensedView>
          }
        ></Route>
      )}
      //#endregion
      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}



export { PrivateRoutes }
