import React from "react";
import styled from "styled-components";
import Truck from '../../../../../_metronic/assets/car/Truck.png';
import Arrive_Truck from '../../../../../_metronic/assets/car/Arrive_Truck.png';
import { TruckPathBackgrounColors,TruckPathColors } from "../../../../../_metronic/utlis/constants";
const Container = styled.div`
  border-radius: 30px;
  width: 160px;
  padding: 20px 12px;
  font-size: 18px;
  font-weight: 400;
  color:#fff ;// ${(props) => TruckPathColors[props.status]};
  background-color: ${(props) => TruckPathBackgrounColors[props.status]};
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  height: 60px;
  margin-left:150px;
  text-transform: capitalize;
  text-align:center;


`;
const TruckPath = ({ ...props }) => {
    const { status } = props;
    return (
        <Container status={status} >
       <span className="mx-auto">  
       {props?.children}
       </span>
        </Container>
    )
}

export default TruckPath
