import React, {useState, useEffect, useRef} from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {useDispatch} from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import DeviceRow from './DeviceRow'
import styled from 'styled-components'
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  z-index: 5000;
  background: white;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  overflow: auto;
`
const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '100%',
  },
  listInner: {
    position: 'relative',
    margin: '10px', //;//theme.spacing(1.5, 0),
  },
}))

export const DeviceListWrapper = ({devices, keyword, setKeyword}) => {
  const [showSerach, setShowSearch] = useState(false)
  // alert(JSON.stringify(devices))
  return (
    <Container className=' d-flex '>
      <div className='card-title'>
        {showSerach && (
          <div className='d-flex align-items-center position-relative my-1'>
            <div className='fs-1 position-absolute ms-6'>
              <KTIcon iconName='magnifier' className='fs-1' />
            </div>

            <div
              className='fs-1 position-absolute me-6'
              style={{cursor: 'pointer', right: '0'}}
              onClick={() => {
                setKeyword('')
                setShowSearch((showSerach) => !showSerach)
              }}
            >
              <KTIcon iconName='trash' className='fs-1' />
            </div>

            <input
              type='text'
              data-kt-user-table-filter='search'
              className='form-control form-control-solid w-250px ps-14'
              placeholder='Search user'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        )}
        {!showSerach && (
          <div
            className='d-flex align-items-center position-relative my-1'
            style={{cursor: 'pointer'}}
            onClick={() => {
              setShowSearch((showSerach) => !showSerach)
            }}
          >
            {<KTIcon iconName='magnifier' className='fs-1 ms-6' />}
          </div>
        )}
      </div>
      <DeviceList devices={devices} />
    </Container>
  )
}

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

  return (
    <div className='d-flex flex-grow justify-conten-center' style={{overflowX: 'auto'}}>
      {devices.map((item, index) => {
        return <DeviceRow item={item} index={index} />
      })}
    </div>
  )
}
