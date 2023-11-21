import {useSelector} from 'react-redux'
import {formatSeconds} from '../../../../../../reactHelper'
import TruckPath from '../../../../terminal/components/sidebar/TruckPath'
import styled from 'styled-components'
const generateName = (index) => {
  const numbers = [
    'الأول',
    'الثاني',
    ' الثالث',
    'الرابع',
    'الخامس',
    'السادس',
    'السابع',
    'الثامن',
    'التاسع',
    'العاشر',
  ]
  return `الباص ${numbers[index]}`
}

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
export const BusListWrapper = ({devices, keyword, setKeyword}) => {
  const deviceStatus = useSelector((state: any) => state.terminalPath.deviceStatus)

  return (
    <Container className='d-flex '>
      {deviceStatus && deviceStatus.map((item, index) => {
        return (
          item?.distance && (
            <TruckPath key={index} distance={item.distance} duration={formatSeconds(item.duration)}>
              {item.name}
            </TruckPath>
          )
        )
      })}
    </Container>
  )
}
