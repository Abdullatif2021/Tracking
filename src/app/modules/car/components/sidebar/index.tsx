import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TruckPath from './TruckPath'
import { useSelector } from 'react-redux'
import { useAuth } from '../../../auth'
import PatternLogo from '../../../../../_metronic/assets/car/pattern.png'
import TrianglesLogo from '../../../../../_metronic/assets/car/triangles2.png'
import PlaneLogo from '../../../../../_metronic/assets/car/plane-icon.png'
import StarsLogo from '../../../../../_metronic/assets/car/triangles1.png'
import Logo from '../../../../../_metronic/assets/car/KKIA-LOGO.png'
import Truck from '../../../../../_metronic/assets/car/point.png';
import Arrive_Truck from '../../../../../_metronic/assets/car/point.png';
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: #04615c;
  width: 430px;
  height: 100vh;
  right: 0;
  z-index: 2;
`
const Front = styled.div`
  content: '';
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  height: 30px;
  transform: rotate(90deg);
  transform-origin: left;
  background-size: 40px;
`
const Topleftconcave = styled.div`
  position: absolute;
  background: #d9d9d9;
  width: 63px;
  height: 69px;
  left: 0;
  top: 0;
  border-bottom-right-radius: 500px;
`
const Bottomleftconcave = styled.div`
  position: absolute;
  background: #d9d9d9;
  width: 65px;
  height: 65px;
  bottom: 0;
  left: 0;
  border-top-right-radius: 500px;
`
const ImageLogo = styled.img`
  right: 10px;
  top: 0;
  position: absolute;
  width: 300px;
  height: 81px;
  z-index: 99;
`
const Pattern = styled.img`
  left: 40px;
  top: -659px;
  position: absolute;
  width: 1049px;
  height: 1095px;
  z-index: 5;
`
const Triangles = styled.img`
  top: 40%;
  left: 20px;
  position: absolute;
  width: 166px;
  height: 210px;
  z-index: 20;
`

const PLane = styled.img`
  right: 40%;
  top: 89%;
  bottom: 50%;
  position: relative;
  width: 129px;
  height: 67px;
  z-index: 22;
  bottom: 550px;
`
const Stars = styled.img`
  right: 2px;
  top: 28%;
  position: absolute;
  width: 13%;
  height: 70%;
  z-index: 21;
`

const Container = styled.div`
  height: 100%;
  width: 100%;

  font-family: sans-serif;
`

const Top = styled.div`
  height: 400px;
`

const Bottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  z-index: 99;
`

const Desc = styled.p`
  font-size: 25px;
  font-weight: 400;
  display: inline-flex;
  gap: 10px;
  color: blue;
`

const ImageIcon = styled.div`

:after {
  content:"";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 50px;
  height: 100%;
  height: inherit;
  border-left: 2px dotted #047d76;
  border-left: ${(props) => props.status ? '2px dotted #047d76' : ''};
}
`;
const startTime = new Date('2023-03-28T15:04:02')

export const Sidebar = () => {
  const terminals = useSelector((state: any) => state.truckPath.terminals)
  const { currentUser } = useAuth()
  const [clockTime, setClockTime] = useState<any>(new Date())
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

  return (
    <Wrapper className='saw-tooth-container'>
      {<Front />}
      <ImageLogo src={Logo} />
      <Pattern src={PatternLogo} />
      <Triangles src={TrianglesLogo} />
      <PLane src={PlaneLogo} />
      <Stars src={StarsLogo} />
      <Topleftconcave />
      <Bottomleftconcave />
      <Bottom className='d-flex flex-column gap-5 align-items-center py-6'>
        {terminals.map((item, index) => {
          return (
            <div className='d-flex align-items-center gap-6'>
              <ImageIcon status={index == 0 ? false :true }>
                <img
                  src={item.status == 0 ? Arrive_Truck : Truck}
                  style={{ width: '18px', height: '18px' }}
                /></ImageIcon>
              <TruckPath key={index} status={item.status}>
                {item.name}
              </TruckPath>
            </div>
          )
        })}
      </Bottom>
    </Wrapper>
  )
}
