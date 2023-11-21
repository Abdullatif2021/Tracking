import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../../../../responsive";
import { currentUserLaravelActions, truckPathActions } from "../../../../store";
import './style.css';


const Container = styled.div`
    width: calc(100% - 20px);
    margin-right: 20px;
    padding: 40px;
    height: 100%;
    color:white;
;
`;



const Top = styled.div``;
const Title = styled.h1`
text-align: center;
color: white;
 font-size: 100px;
 font-weight: 300;
 ${mobile({ fontSize: '20px' })};

`;
const Bottom = styled.div`

  display: flex;
  justify-content:space-between;
 
`;

const Current = styled.div`
   display: flex;
   flex-direction: column;

`;
const CurrentTitle = styled.h1`
    font-size:70px;
    font-weight: 300;
    margin: 0 40px;
    font-style: italic;
    ${tablet({ fontSize: '20px' })}

`;

const HallName = styled.h2`
    font-weight: 300;
    font-size:60px;
    margin: 0 40px;
    font-style: italic;
    text-align: center;
    direction: rtl;
    margin: 25px 0;
    ${tablet({ fontSize: '20px' })}
    font-family: sans-serif;
   
`;




const Destination = () => {
    const audioRef = useRef(null);
 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const is_reach = useSelector(
        (state) => state.truckPath.is_reach
    );

    const destinationTime = useSelector(
        (state) => state.periodTimePage.destinationTime
    );

    const nextStation = useSelector(
        (state) => state.truckPath.nextStation
    );
    const currentStation = useSelector(
        (state) => state.truckPath.currentStation
    );
    useEffect(() => {
        if (!is_reach) {
            //  navigate("/");
        }
        const timer = setTimeout(() => {
            dispatch(truckPathActions.updateArriveStation())
            navigate("/map");
        }, destinationTime * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [destinationTime]);



    useEffect(() => {
        // Create the audio object and set its source
        const audio = new Audio(currentStation?.voice);
        audioRef.current = audio;
    
        // Start playing the audio
        audio.play();
    
        // Cleanup function to release resources when component is unmounted
        return () => {
          audio.pause();
          audio.src = '';
          audioRef.current = null;
        };
      }, []);


    return (
        <div className="finalcontainer">
            <Container>
                <Top>
                    <Title>
                        شكـــرا  لثقتــكم
                    </Title>
                </Top>
                <Bottom>
                    <Current>
                        <CurrentTitle>
                            وصلنا جهتنا الحالية
                        </CurrentTitle>
                        <HallName>{currentStation?.name}</HallName>
                    </Current>

                    <Current>
                        <CurrentTitle>
                            وجهتنا القادمة
                        </CurrentTitle>
                        <HallName>{nextStation?.name}</HallName>
                    </Current>
                </Bottom>
            </Container>
        </div>


    );
};

export default Destination;
