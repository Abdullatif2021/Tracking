/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import theme from '../../../_metronic/helpers/common/theme';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from '@mui/material';
import Landing from './pages/landing'
import Destination from './pages/destination'
// import MainPage from './pages/map/main/MainPage'
import { useEffectAsync } from '../../../reactHelper';
import { sessionActions } from '../../../store';
import { useDispatch } from 'react-redux';
import SocketController from './SocketController';
import MainPage from './pages/map/main/MainPage';
import Advertisement from './pages/advertisment';
import { TerminalLayout } from './TerminalLayout';



const TerminalPage = () => (

  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route element={<TerminalLayout />}>
          <Route path='/dest' element={<Destination />} />
          <Route path='/map' element={<MainPage />} />
          <Route path='/' element={<Landing />} />
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </ThemeProvider>
  </StyledEngineProvider>
)

export default TerminalPage ;
