import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TruckPath from '../../../../car/components/sidebar/TruckPath'
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
export const TerminalListWrapper = ({ devices, keyword, setKeyword }) => {
  const terminals = useSelector((state: any) => state.truckPath.terminals);
  const [showSerach, setShowSearch] = useState(false);
  return (
    <Container className=' d-flex '>
      {terminals.map((item, index) => {
        return (
          <TruckPath key={index} status={item.status}>
            {item.name}
          </TruckPath>
        );
      })}
    </Container>
  )
}
