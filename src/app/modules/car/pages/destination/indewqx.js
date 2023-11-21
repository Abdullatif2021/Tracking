import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bus from "../../../asset/Bus.jpg";
import "./style.css";
const Landing = () => {
  const navigate = useNavigate();
  const landingTime= useSelector(
    (state) => state.periodTimePage.landingTime
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/map");
    }, landingTime * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [landingTime]);




  return (
    <div className="image-container">
      <img src={Bus} />

    </div>

  );
};

export default Landing;
