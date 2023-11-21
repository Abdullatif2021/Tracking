import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Triangle from "../../../asset/Triangle.svg";
import { tablet } from "../../../../responsive/index";
import { getTimeToReachDestination } from "../../../../reactHelper";
import "./right.css";
const Container = styled.div`
  flex-grow: 1;
  background-color: #194172;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Station = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  color: white;
  margin-right: 30px;
  gap: 25px;
`;

const NextStation = styled.div`
  font-weight: 300;
  font-size: 24px;
`;
const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const HallName = styled.h1`
  font-size: 50px;
  ${tablet({ backgroundColor: "#f7f1f1" })}
  font-family: sans-serif;

  font-weight: 500;
`;
const ArrivalTime = styled.div`
 
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  border-right: 1px solid;
  height: 70%;

  font-style: revert;

`;

export const Right = () => {
  const currentPosition = useSelector(
    (state) => state.truckPath.currentPosition
  );
  const nextStation = useSelector(
    (state) => state.truckPath.nextStation
  );
  const currentStation = useSelector(
    (state) => state.truckPath.currentStation
  );
  const speed = useSelector(
    (state) => state.truckPath.speed
  );
  const predectedTime = useSelector((state) => state.truckPath.predectedTime);
  // const [predictedTime, setPredictedTime] = useState(0);
  // useEffect(() => {
  //   setPredictedTime(getTimeToReachDestination(currentPosition?.latitude, currentPosition?.longitude, nextStation?.latitude, nextStation?.longitude, speed))
  // }, [speed, currentPosition,nextStation])
  return (
    <Container>
      <Station>
        <NextStation style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Next Station</div>
            <div>المحــطة القادمة</div>
          </div>

          <Icon>
            <img src={Triangle}></img>
          </Icon>
        </NextStation>

        <HallName>{nextStation?.name}</HallName>
      </Station>

      <ArrivalTime>
        <span className="arrival-title">وقت الوصول المتوقع</span>
        <span className="arrival-time">{predectedTime}</span>
      </ArrivalTime>
    </Container>
  );
};
