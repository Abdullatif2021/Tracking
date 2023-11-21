import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//import { mobile, tablet } from "../../../../responsive";
//import { currentUserLaravelActions, truckPathActions } from "../../../../store";
import './style.css';
import { errorsActions, terminalPathsActions } from "../../../../../store";



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
    color:white;

`;

const HallName = styled.h2`
    font-weight: 300;
    font-size:60px;
    margin: 0 40px;
    font-style: italic;
    text-align: center;
    direction: rtl;
    margin: 25px 0;
    font-family: sans-serif;
    color:white;
`;


interface AudioRefObject extends HTMLAudioElement {
    play(): Promise<void>;
    pause(): void;
}

const Destination = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const terminalInfo = useSelector((state: any) => state.terminalPath.terminalInfo);
    const checkArriveTerminal = useSelector((state: any) => state.terminalPath.checkArriveTerminal)
    const destinationTime = useSelector((state: any) => state.pageTimeManager.destinationTime);
    const audioRef = useRef<AudioRefObject | null>(null);





    const  isPlaying  = ()=> {
        let audio : AudioRefObject | null =audioRef.current;
          if(audio){
            return !audio.paused
                  && audio.readyState > 2
                  && !audio.ended
                  && audio.currentTime > 0
          }
          else{
            return false;
          }
     
    }


    useEffect(() => {
        if (!checkArriveTerminal) {
            navigate("/terminal/map");
        }
        {
            const audio = new Audio(terminalInfo?.voice);
            audioRef.current = audio;
           // audioRef.current.muted = true;
            if (!isPlaying()) {
                audioRef?.current?.play().catch((error) => {
                 //   dispatch(errorsActions.push(error.message))
                   // throw Error(error?.message);
                    //  alert(JSON.stringify)
                });
            }

        }
        const timer = setTimeout(() => {
            dispatch(terminalPathsActions.updateArriveTerminal(false))
            navigate("/terminal/map");
        }, destinationTime * 1000);

        return () => {
            clearTimeout(timer);
            dispatch(terminalPathsActions.updateArriveTerminal(false))
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }

        };
    }, [destinationTime]);




    return (
        <div className="finalcontainer1">
        <Container>
            <Top>
                <Title>
                يرجى الصعود الى الباص
                </Title>
            </Top>
            <Bottom>
            
            </Bottom>
        </Container>
    </div>

    );
};

export default Destination;
