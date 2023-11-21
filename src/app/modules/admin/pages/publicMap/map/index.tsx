import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ThemeProvider, StyledEngineProvider} from '@mui/material'
import {useIntl} from 'react-intl'
import theme from '../../../../../../_metronic/helpers/common/theme'
import Main from './MainPage'



const PublicMapPage = () => {
  const intl = useIntl()
  return (
    <>
    
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Outlet />}>
              //#region Manage Vehicles
              <Route
                path='all'
                element={
                  
                    <Main />
                  
                }
              />
                
            </Route>
            <Route index element={<Navigate to={'admin/public-map/all'} />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default PublicMapPage
