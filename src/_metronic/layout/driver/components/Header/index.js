import React from "react";
import styled from "styled-components";
import { Left } from "./Left";
import { Right } from "./Right";

const Conatainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: #d6d5da;
  padding-bottom: 8px;
 
`;


export const Header = () => {
  return (
    <Conatainer>
      <Left />
      <Right />
    </Conatainer>
  );
};
