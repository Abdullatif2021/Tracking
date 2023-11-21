import React, {useEffect, useState} from 'react'
import {useSession} from '../core/provider'
import {formatTime} from '../../../../../_metronic/helpers'

export const HeaderSession = () => {
  const {vehicles_name, total_time, is_running, error} = useSession()
  const [counter, setCounter] = useState(total_time)
  useEffect(() => {
    if (is_running) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1000) // Increase the counter by 1000 milliseconds (1 second)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [is_running])
  return (
    <div className='card-body py-1'>
      {error && (
   
          <div className='alert alert-danger d-flex align-items-center justify-content-center p-4 fs-md-4 fs-sm-6'>
            <span>
             {error}
            </span>
          </div>
    
      )}
      <div>
        {vehicles_name && (
          <p className='text-center my-1 fs-md-2 fs-sm-1 fw-bold'>License Plate :{vehicles_name}</p>
        )}
        <button className='btn btn-primary me-5 w-100'>
          <span className='fs-md-2 fs-sm-1'>{formatTime(counter)}</span>
        </button>
      </div>
    </div>
  )
}
