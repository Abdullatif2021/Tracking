import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adsManagerActions } from '../../../../store';
import './style.css'
function Advertisement() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentAd = useSelector((state) => state.adsManager?.currentAd);
  const showAds = useSelector((state) => state.adsManager?.showAds);
  const videoRef = useRef(null);
  useEffect(() => {
    if (!showAds) {
      navigate('/map')
    }
    const videoElement = videoRef.current;

    // if (showAds && videoElement) {
    //   const playPromise = videoElement.play();

    //   if (playPromise !== undefined) {
    //     playPromise
    //       .then(() => {
    //         // Autoplay started
    //       })
    //       .catch((error) => {
    //         // Autoplay failed, user interaction required
    //         videoElement.addEventListener('click', () => {
    //           videoElement.play();
    //         });
    //       });
    //   }
    // }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.removeEventListener('click', () => {
          videoElement.play();
          videoElement.muted = false;
        });
        dispatch(adsManagerActions.setLoadedAds(false))
        dispatch(adsManagerActions.setShowAds(false));
        dispatch(adsManagerActions.setAdDisplayed(currentAd.id));

      }
    };
  }, [showAds]);


  function handleVideoEnd() {
    dispatch(adsManagerActions.setShowAds(false));
    dispatch(adsManagerActions.setAdDisplayed(currentAd.id));
    navigate('/map')
  }

  const handleCanPlayThrough = () => {
    dispatch(adsManagerActions.setLoadedAds(true))
    videoRef.current.play();
  };

  // if (videoRef.current) {
  //   videoRef.current.addEventListener("canplaythrough", handleCanPlayThrough);
  // }

  return (
    <div>
      {showAds && currentAd && (
        <div className='vidio'>
          <video id="video-player" ref={videoRef} onEnded={handleVideoEnd} onLoadedData={handleCanPlayThrough}   >
            <source id="advertisement" src={currentAd.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Advertisement;











