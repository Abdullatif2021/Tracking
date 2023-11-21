import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import ArrowIcon from '../../../../../_metronic/assets/car/arrow.png'
import MapICon from '../../../../../_metronic/assets/car/map-icon.png'
const Conatainer = styled.div`
  display: flex;
  height: 90px;
  background-color: #d9d9d9;
  width: calc(100% - 400px);
  margin-right: auto;
  padding-right: 8rem;
  justify-content: center;
  text-transform:capitalize;
  font-weight: 600;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 60px;
 margin-left:50px;
`

const NextStation = styled.div`
  font-weight: 600;
  color: #04615c;
  font-size: 25px;

`
const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

`
const HallName = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 4rem;
  color: #04615c;
`
const Left = styled.div`
  position: absolute;
  left: 0;
`

const ImageMap = styled.img`
  left: 20px;
  top: 3px;
  position: absolute;
  width: 92px;
  height: 76px;

`

export const Header = () => {
  const nextTerminal = useSelector((state: any) => state.truckPath.nextTerminal)
  return (
    <Conatainer>
      <Right className='d-flex align-items-center' >
        <NextStation >
          <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div> المحطة القادمة </div>
            <div>Next Station </div>
          </div>
        </NextStation>
        <Icon>
          <img src={ArrowIcon}></img>
        </Icon>
        <HallName>{nextTerminal?.name}</HallName>
      </Right>

   
        <ImageMap src={MapICon} />
    
    </Conatainer>
  )
}
