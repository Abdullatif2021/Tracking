import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import DeviceRow from './DeviceRow'


const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '100%',
  },
  listInner: {
    position: 'relative',
    margin: '10px', //;//theme.spacing(1.5, 0),
  },
}))

const DeviceList = ({devices}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const listInnerEl = useRef(null)

  if (listInnerEl.current) {
    listInnerEl.current.className = classes.listInner
  }

  const [, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 60000)
    return () => {
      clearInterval(interval)
    }
  }, [])


  return <div className='d-flex flex-grow justify-conten-center' style={{overflowX:'auto'}}>
    {devices.map((item, index) => {
      return <DeviceRow  item={item}  index={index}/>
     
    })}
  </div>
}

export default DeviceList
