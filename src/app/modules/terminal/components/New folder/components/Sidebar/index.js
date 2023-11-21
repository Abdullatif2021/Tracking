import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Truck from "../../../asset/Truck.png";
import TruckPath from "./TruckPath";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 100%;
  width: 100%;
  gap: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  font-family: sans-serif;
`;

const Top = styled.div`
  height: 400px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;

`;

const Bottom = styled.div`
  border-top: 1px solid gray;
  position: relative;
  margin-top: 25px;
  width: 80%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.p`
  font-size: 25px;
  font-weight: 400;
  display: inline-flex;
  gap: 10px;
  color: blue;
`;
//const startTime = new Date('2023-03-28T15:04:02');

export const Sidebar = () => {
  const stations = useSelector((state) => state.truckPath.stations);
  const currentTime = useSelector(
    (state) => state.currentUserLaravel.currentTime
  );

  const [clockTime, setClockTime] = useState(new Date());

  /*useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);*/

  useEffect(() => {
    const [hours, minutes, seconds] = currentTime.split(":");
    const initialTime = new Date();
    initialTime.setHours(hours);
    initialTime.setMinutes(minutes);
    initialTime.setSeconds(seconds);
    setClockTime(initialTime);

    const intervalId = setInterval(() => {
      setClockTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <Container>
      <Top>
        {stations.map((item) => {
          return (
            <TruckPath key={item.id} status={item.status}>
              {item.name}
            </TruckPath>
          );
        })}
        {/* <TruckPath background={"#194172"} color={'white'} status={1}>الصالة الثالثة</TruckPath>
        <TruckPath background={"#bd2d3c"} color={'white'} status={1}

        >
          الصالة الاولى
        </TruckPath>
        <TruckPath background={"#bd2d3c"} color={'white'} status={1}>الصالة الثانية</TruckPath>

        <TruckPath background={"#f2f2f2"} color={'##e3e3e3'} status={0}>الصالة الثالثة</TruckPath>
        <TruckPath background={"#f2f2f2"} color={'##e3e3e3'} status={0}>الصالة الثالثة</TruckPath> */}
      </Top>
      <Bottom>
        <Desc>
          <span> الوقت الحالي </span>
          <span style={{ color: "red" }}>
            {clockTime.toLocaleTimeString([], { hour12: false })}
          </span>
        </Desc>
      </Bottom>
    </Container>
  );
};
