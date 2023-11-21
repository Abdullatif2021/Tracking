import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import { LayoutSplashScreen } from '../../../../_metronic/layout/core'
import { AuthModel, SessionGpsModel, UserModel } from './_models'
import * as authHelper from './AuthHelpers'
import { getServerGPS, getSessionGPS, getUserByToken } from './_requests'
import { WithChildren } from '../../../../_metronic/helpers'
import { useDispatch } from 'react-redux'
import { sessionActions } from '../../../../store/gps/sessions'
import { useEffectAsync } from '../../../../reactHelper'
import { GetUserTypes } from '../../../../services/sidebar'

type AuthContextProps = {
  auth: AuthModel | undefined,
  //currentTime: string,
 // setCurrentTime: Dispatch<SetStateAction<string>>,
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  //currentTime: "",
  //setCurrentTime: () => { },
  saveAuth: () => { },
  currentUser: undefined,
  setCurrentUser: () => { },
  logout: () => { },
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const [currentTime, setCurrentTime] = useState<string>("")
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
  }

  return (
    <AuthContext.Provider value={{  auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { auth, logout, setCurrentUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {

    const requestUser = async (apiToken: string) => {
      try {

        const resposeServer=await getServerGPS();
        dispatch(sessionActions.updateServer(resposeServer));

        const resposeSession :any =await getSessionGPS();
        dispatch(sessionActions.updateUser(resposeSession));

  
        dispatch(GetUserTypes());

       
        // const resposeServer=await getServerGPS();
        // dispatch(sessionActions.updateServer(resposeServer));

        // const resposeSession :any =await getSessionGPS();
        // dispatch(sessionActions.updateUser(resposeSession));
      

        //certifcate session user
        if (!didRequest.current) {
          const data: any = await getUserByToken(apiToken)
          console.log(data)
          if (true) {
           let temp=data;
           temp['roles']=data?.roles.map((item)=>item.code)
            setCurrentUser(temp)
          }
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (auth && auth.api_token) {
      requestUser(auth.api_token)
    } else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export { AuthProvider, AuthInit, useAuth }
