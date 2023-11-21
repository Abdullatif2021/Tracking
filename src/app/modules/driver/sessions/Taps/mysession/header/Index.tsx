import {useEffect, useState} from 'react'
import {
  KTIcon,
  QUERIES,
  ResponeApiCheck,
  convertTimeToMilliseconds,
  formatTime,
} from '../../../../../../../_metronic/helpers'
import {CustomButton} from '../../../../../../../_metronic/helpers/components/buttons/CustomButton'
import {useSession} from '../../../core/provider'
import {useNotification} from '../../../../../../../_metronic/hooks/useNotification'
import {StartSession, StopSession} from '../../../core/requests'
import {useIntl} from 'react-intl'
import { useQueryClient } from 'react-query'

const Header = () => {
  const queryClient = useQueryClient()
  const intl = useIntl()

  const {is_running, running_time, setError, setRunningSession, setTotalTime, setRunningTime,setVehicleName} =
    useSession()
  const [counter, setCounter] = useState(running_time)

  useEffect(() => {
    if (is_running) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1000)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [is_running])

  const handleStart = async () => {
    const res: ResponeApiCheck = await StartSession()
    if (res.result == 'success') {
      setVehicleName(res.data?.vehicles)
      setRunningSession(true)
      setError(null)
     // queryClient.invalidateQueries([`${QUERIES.DRIVER_MY_SESSION}`])
    } else {
      setError(res.error_description['msg'])
    }
  }
  const handleStop = async () => {
    const res: ResponeApiCheck = await StopSession()
    if (res.result == 'success') {
      setRunningSession(false)
      setTotalTime(convertTimeToMilliseconds(res?.data?.total_time))
      setRunningTime(0)
      setCounter(0)
     // queryClient.invalidateQueries([`${QUERIES.DRIVER_MY_SESSION}`])
    } else {
    }
  }
  return (
    <div className='card-header border-0 py-1 d-flex justify-content-evenly align-items-center'>
      <div style={{"flex":1}}>
        <p className='text-center my-1 fs-lg-1  fs-md-1 fs-sm-4 fw-bold' style={{color: '#183f72'}}>
          {formatTime(counter)}
        </p>
      </div>
      <div className='d-flex gap-2 justify-content-center' style={{"flex":1}}>
        <CustomButton
          title={intl.formatMessage({id: 'start'})}
          handleClick={handleStart}
          disabled={is_running}
        >
          <i className='bi bi-play fs-2'></i>
        </CustomButton>
        <CustomButton title={intl.formatMessage({id: 'stop'})} handleClick={handleStop} disabled={!is_running}>
          <i className='bi bi-pause fs-2'></i>
        </CustomButton>
      </div>
    </div>
  )
}

export {Header}
