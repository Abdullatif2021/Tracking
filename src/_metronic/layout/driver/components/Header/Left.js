import React from "react";
import styled from "styled-components";
import Logo from "../../../asset/logo.jpg";


const Conatiner = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 100px;
`;

const ImageLogo = styled.img`
  background-size: cover;
  object-fit: fill;
  height: 100px;
  width: 100%;
`;
const Bottom = styled.div`
  background-color: white;
  flex-grow: 1;
  border-bottom-right-radius: 8%;
`;

export const Left = () => {


  return (
    <Conatiner>
      <Top>
        <ImageLogo src={Logo} />
      </Top>

    </Conatiner>
  );
};
