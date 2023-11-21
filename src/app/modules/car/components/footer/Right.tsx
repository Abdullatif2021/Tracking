import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import Triangle from '../../../../../_metronic/assets/car/Triangle.svg'
//import { tablet } from "../../../../responsive/index";
///import { getTimeToReachDestination } from "../../../../reactHelper";
import './right.css'
const Container = styled.div`
  flex-grow: 1;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ArriveTime = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: white;
  margin-right: 410px;
  flex-direction: column;
  color: #04615c;
  font-size: 25px;
  font-weight: 600;
`

const NextStation = styled.div`
  font-weight: 300;
`
const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
const HallName = styled.h1`
  font-family: sans-serif;
  color: white;
  font-weight: 700;
  font-size: 4rem;
  color: #04615c;
`
const CurrentTime = styled.div`
  color: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  border-right: 1px solid;
  height: 70%;

  font-style: revert;
`

export const Right = () => {
  const nextTerminal = useSelector((state: any) => state.truckPath.nextTerminal)
  const predectedTime = useSelector((state: any) => state.truckPath.predectedTime)

  return (
    <Container>
      <ArriveTime>
        <p className='m-auto'>الوقت المتوقع للوصول</p>
        <p className='m-auto'>5 Minutes, 34 Seconds </p>
      </ArriveTime>

      <CurrentTime>
        <span className='arrival-title'>وقت الوصول المتوقع</span>
        <span className='arrival-time'>{predectedTime}</span>
      </CurrentTime>
    </Container>
  )
}
