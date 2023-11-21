import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {
  QUERIES,
  WithChildren,
  calculateTimeDifference,
  convertTimeToMilliseconds,
} from '../../../../../_metronic/helpers'
import {SessionDriver} from './models'
import {Spinner} from '../../../../../_metronic/helpers/components/Spinner'
import {getMySession} from './requests'
import { useQuery } from 'react-query'
import { json } from 'stream/consumers'

interface Props {
  sessions: SessionDriver[]
  setSessions: Dispatch<SetStateAction<SessionDriver[] | undefined>>
  setRunningTime: Dispatch<SetStateAction<number | undefined>>
  setRunningSession: Dispatch<SetStateAction<boolean | undefined>>
  setTotalTime: Dispatch<SetStateAction<number | undefined>>
  setVehicleName: Dispatch<SetStateAction<string | undefined>>
  setError: Dispatch<SetStateAction<string | undefined>>
  total_time: number
  running_time: number
  is_running: boolean
  vehicles_name: string
  error: string
}
const initialState = {
  sessions: [],
  total_time: null,
  running_time: 0,
  is_running: false,
  vehicles_name: null,
  error: null,
  setRunningSession: () => {},
  setSessions: () => {},
  setRunningTime: () => {},
  setTotalTime: () => {},
  setVehicleName: () => {},
  setError: () => {},
}

//localStorage.getItem('visibleColumns') ||
export const MYSESSIONContext = React.createContext<Props>(initialState)
const useSession = () => {
  return useContext(MYSESSIONContext)
}
export const SessionProvider: FC<WithChildren> = ({children}) => {
  const [sessions, setSessions] = useState<SessionDriver[] | undefined>()
  const [running_time, setRunningTime] = useState<number>()
  const [is_running, setRunningSession] = useState<boolean>(false)
  const [total_time, setTotalTime] = useState<number>(null)
  const [vehicles_name, setVehicleName] = useState<string>(null)
  const [error, setError] = useState<string>(null)
  return (
    <MYSESSIONContext.Provider
      value={{
        total_time,
        setTotalTime,
        is_running,
        setRunningSession,
        sessions,
        setSessions,
        running_time,
        setRunningTime,
        setVehicleName,
        vehicles_name,
        setError,
        error,
      }}
    >
      {children}
    </MYSESSIONContext.Provider>
  )
}
const SessionProviderInit: FC<WithChildren> = ({children}) => {
  const {
    setSessions,
    setRunningTime,
    setRunningSession,
    setTotalTime,
    setVehicleName,
    error,
    setError,
  } = useSession()
  const didRequest = useRef(false)
  const [Loading, setLoading] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.DRIVER_MY_SESSION}`,
    () => {
      return getMySession()
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  useEffect(() => {
    if(response){
      setSessions(response?.session)
      setVehicleName(response?.vehicles_name)
      setTotalTime(convertTimeToMilliseconds(response?.total_time))
      setRunningTime(convertTimeToMilliseconds(response?.total_time_2))
      if (response?.session_first) {
        setRunningSession(true)
      } else {
        setRunningSession(false)
      }
      setLoading(false)
    }
    // const requestUser = async () => {
    // //  try {
      
    //   } catch (error) {
    //     console.error(error)
    //     if (!didRequest.current) {
    //     }
    //   } finally {
    //     setLoading(false)
    //   }
  //  }
   // requestUser()
  }, [response])

  return Loading  ? <Spinner /> : <>{children}</>
}
export {useSession, SessionProviderInit}
