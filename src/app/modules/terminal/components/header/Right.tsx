import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Triangle from "../../../../../_metronic/assets/driver/Triangle.svg";
//import { tablet } from "../../../../responsive/index";
///import { getTimeToReachDestination } from "../../../../reactHelper";
import "./right.css";
import { useAuth } from "../../../auth";
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
  font-family: sans-serif;
  color:white;
  font-weight: 500;
`;
const ArrivalTime = styled.div`
    color:white;
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
  const terminalInfo =useSelector((state:any) => state.terminalPath.terminalInfo);

  return (
    <Container>
      <Station>
        {/* <NextStation style={{ display: "flex", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Next Station</div>
            <div>المحــطة القادمة</div>
          </div>

          <Icon>
            <img src={Triangle}></img>
          </Icon>
        </NextStation> */}

        <HallName>{terminalInfo?.name}</HallName>
      </Station>

      {/* <ArrivalTime>
        <span className="arrival-title">وقت الوصول المتوقع</span>
        <span className="arrival-time">{predectedTime}</span>
      </ArrivalTime> */}
    </Container>
  );
};
