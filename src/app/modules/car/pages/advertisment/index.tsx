import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { adsManagerActions } from '../../../../store';
import './style.css';
import { adsManagerActions, errorsActions } from '../../../../../store';

interface AudioRefObject extends HTMLVideoElement {
  play(): Promise<void>;
  pause(): void;
}
interface Props {
  closeAds: () => void
}
function Advertisement(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentAd = useSelector((state: any) => state.adsManager?.currentAd);
  const showAds = useSelector((state: any) => state.adsManager?.showAds);

  const videoRef = useRef<AudioRefObject | null>(null);;


  useEffect(() => {
    if (!showAds) {
      navigate('/car')
    }
    const videoElement = videoRef.current;

    if (showAds && videoElement) {
      const playPromise = videoElement.play().catch((error) => {
        console.log(error);
        //  alert(JSON.stringify)
      });;

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            videoElement.play().catch((error) => {
              dispatch(errorsActions.push(error.message))
              throw Error(error?.message);
              props.closeAds()
              //  alert(JSON.stringify)
            });;
            // Autoplay started
            // document.getElementById('video-player').muted = false;
          })
          .catch((error) => {
            // Autoplay failed, user interaction required
            videoElement.addEventListener('click', () => {
              //document.getElementById('video-player').muted = false;
              videoElement.play();
              props.closeAds()
            });
          });
      }
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.removeEventListener('click', () => {
          videoElement.play();
          videoElement.muted = false;
        });
        if (currentAd)
          dispatch(adsManagerActions.setAdDisplayed(currentAd.id))
        props.closeAds()
        //    dispatch(adsManagerActions.setLoadedAds(false))
        //  dispatch(adsManagerActions.setShowAds(false));
        //  dispatch(adsManagerActions.setAdDisplayed(currentAd.id));

      }
    };
  }, [showAds]);


  function handleVideoEnd() {
    dispatch(adsManagerActions.setAdDisplayed(currentAd.id))
    props.closeAds()
    // dispatch(adsManagerActions.setShowAds(false));
    //  navigate('/map')
  }

  const handleCanPlayThrough = () => {
    dispatch(adsManagerActions.setLoadedAds(true))
    videoRef?.current?.play().catch((error) => {
      console.log(error);
      dispatch(errorsActions.push(error.message))
      props.closeAds();
      //  alert(JSON.stringify)
    });;
  };

  // if (videoRef.current) {
  //   videoRef.current.addEventListener("canplaythrough", handleCanPlayThrough);
  // }

  return (
    <div>
      {showAds && currentAd && (


        <div className='vidio1'>
          <video id="video-player" ref={videoRef} onEnded={handleVideoEnd} onCanPlayThrough={handleCanPlayThrough}  muted >
            <source id="advertisement" src={currentAd.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Advertisement;











