import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import ArrowLogo from '../../../../../_metronic/assets/car/arrow1.png'
import Logo from '../../../../../_metronic/assets/car/asset-powered-saas.png'
import {useAuth} from '../../../auth'
const Conatainer = styled.div`
  height: 90px;
  width: calc(100% - 400px);
  margin-right: auto;
  background-color: #d9d9d9;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 7rem;
  font-weight: 600;
  text-transform: capitalize;
`
const Right = styled.div`
  gap: 15px;
  margin-left: 130px;
`
const CurrentLocationStyle = styled.div`
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  color: #04615c;
  font-size: 23px;
  direction: ltr;
`

const ArriveTime = styled.div`
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  color: #04615c;
  font-size: 23px;
  direction: ltr;
`

const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const CurrentTime = styled.div`
  color: white;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #04615c;
  height: 70%;
  font-style: revert;
  align-items: center;
`

const Left = styled.div`
  position: absolute;
  left: 0;
  bottom: 12px;
`
export const Footer = () => {
  const devicesDistance = useSelector((state: any) => state.terminalPath.devicesDistance)
  const terminalInfo = useSelector((state: any) => state.terminalPath.terminalInfo)
  const {currentUser} = useAuth()
  const predectedTime = useSelector((state: any) => state.truckPath.predectedTime)
  const [clockTime, setClockTime] = useState<any>(new Date())
  const [arriveTime, setArriveTime] = useState<any>(new Date())
  useEffect(() => {
    const [hours, minutes, seconds] = currentUser ? currentUser.current_time.split(':') : []
    const initialTime = new Date()
    initialTime.setHours(parseInt(hours))
    initialTime.setMinutes(parseInt(minutes))
    initialTime.setSeconds(parseInt(seconds))
    setClockTime(initialTime)

    const intervalId = setInterval(() => {
      setClockTime((prevTime) => new Date(prevTime.getTime() + 1000))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const [hours, minutes, seconds] = currentUser ? currentUser.current_time.split(':') : []
    const initialTime = new Date()
    initialTime.setHours(parseInt(hours))
    initialTime.setMinutes(parseInt(minutes))
    initialTime.setSeconds(parseInt(seconds))
    setArriveTime(initialTime)

    // const intervalId = setInterval(() => {
    //   setArriveTime((prevTime) => new Date(prevTime.getTime() + 1000))
    // }, 1000)

    // return () => clearInterval(intervalId)
  }, [])
  console.log('devicesDistance :>> ', devicesDistance)
  useEffect(() => {
    const totalSeconds = devicesDistance?.[0]?.duration ? devicesDistance?.[0]?.duration : 0
    setArriveTime(new Date(clockTime.getTime() + (totalSeconds - 1) * 1000))
  }, [devicesDistance])
  function convertSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes} Minutes ${parseInt(remainingSeconds.toLocaleString())} Seconds`
  }
  return (
    <Conatainer style={{minHeight: 90}}>
      <Right className='d-flex align-items-between'>
        <CurrentLocationStyle>
          <p className='m-auto textFooterArabic'>موقعك الحالي</p>
          <p className='m-auto textFooterEnglish'>Your current location</p>
          {/* <p className='m-auto'>5 Minutes, 34 Seconds </p> */}
          {<span className='textFooterResult'>{terminalInfo?.name}</span>}
        </CurrentLocationStyle>
        <Icon>
          <img className='' src={ArrowLogo}></img>
        </Icon>
        <CurrentLocationStyle>
          <p className='m-auto textFooterArabic'>الوقت المتبقي لوصول الحافلة</p>
          <p className='m-auto textFooterEnglish'>Time left for the bus to arrive</p>
          {/* <p className='m-auto'>5 Minutes, 34 Seconds </p> */}
          {
            <span className='textFooterResult'>
              {convertSecondsToTime(
                devicesDistance?.[0]?.duration ? devicesDistance?.[0]?.duration : 0
              )}
            </span>
          }
        </CurrentLocationStyle>
        <Icon>
          <img className='' src={ArrowLogo}></img>
        </Icon>
        <CurrentLocationStyle>
          <p className='m-auto textFooterArabic'>الوقت الحالي </p>
          <p className='m-auto textFooterEnglish'>Present Time</p>
          {/* <p className='m-auto'>5 Minutes, 34 Seconds </p> */}
          {
            <span className='textFooterResult'>
              {arriveTime.toLocaleTimeString([], {hour12: false})}
            </span>
          }
        </CurrentLocationStyle>
        <Icon>
          <img className='' src={ArrowLogo}></img>
        </Icon>
        <CurrentLocationStyle>
          <p className='m-auto textFooterArabic'>وقت الوصول </p>
          <p className='m-auto textFooterEnglish'>Access time</p>
          {/* <p className='m-auto'>5 Minutes, 34 Seconds </p> */}
          {
            <span className='textFooterResult'>
              {arriveTime.toLocaleTimeString([], {hour12: false})}
            </span>
          }
        </CurrentLocationStyle>

        {/* <CurrentTime className={'d-flex flex-column align-items-center'}>
          <div>
          <span className='w-150  fs-3' style={{position: 'relative', bottom: '5px'}}>
              الوقت الحالي Present Time
            </span>
            <span className='w-150  fs-3 mx-3'> {clockTime.toLocaleTimeString([], {hour12: false})}</span>
          </div>
          <div>
          <span className='w-150 fs-3' style={{position: 'relative', bottom: '5px'}}>
              وقت الوصول Access time
            </span>
            <span className='w-150  fs-3 mx-3'> {arriveTime.toLocaleTimeString([], {hour12: false})}</span>
          </div>
        </CurrentTime> */}
      </Right>

      <Left className={'px-3'}>
        <img src={Logo} width={'120px'}></img>
      </Left>
    </Conatainer>
  )
}
