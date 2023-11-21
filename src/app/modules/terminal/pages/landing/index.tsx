import React, {Fragment, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Bus from '../../../../../_metronic/assets/car/Photo.png'
import './style.css'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import { useSelector } from 'react-redux'
const Landing = () => {
  const navigate = useNavigate()
  const landingTime= useSelector((state: any) => state.pageTimeManager.landingTime); 
  /* useSelector(
    (state) => state.periodTimePage.landingTime
  );*/
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/terminal/map')
    }, landingTime * 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [landingTime])

  return (
    <div className='image-container-terminal'>
      <img src={Bus} />
    </div>
  )
}

export default Landing
