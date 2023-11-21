import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bus from "../../../../../_metronic/assets/car/airside.png"
import "./style.css";
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { useSelector } from "react-redux";
const Landing = () => {
  const navigate = useNavigate();
  const landingTime= useSelector((state: any) => state.pageTimeManager.landingTime); 

  
 
  useEffect(() => {
    const timer = setTimeout(() => {
        navigate("/car/map");
    }, landingTime * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [landingTime]);




  return (
    <div className="image-container-car">
      <img src={Bus} />

    </div>

  );
};

export default Landing;
