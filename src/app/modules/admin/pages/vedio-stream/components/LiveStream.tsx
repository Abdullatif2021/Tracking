import { FC, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Spinner } from '../../../../../../_metronic/helpers/components/Spinner';
import React from 'react';
import VedioControl from './VedioControl';

interface Props {
  title: string,
  videoUrl: string,
  onClick?: () => void
}
const VedioPlayer: FC<Props> = ({ title, videoUrl, onClick }) => {
  // Replace with your DirectShow camera stream URL
  const [streamUrl, setStreamUrl] = useState<string>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [voulme, setVolume] = React.useState(1);


  // useEffect(() => {
  //   getLiveStream().then((res: LiveStreamModel) => {
  //     alert(JSON.stringify(res))
  //     if (!res.code) {

  //       // setStreamUrl(res.data.url);
  //       // setAuthentication(res.data.authentication)
  //     }
  //     else {

  //     }
  //   })
  // }, [])

  return (
    <>
      {!streamUrl ? (
        <div className='d-flex flex-column position-relative w-100 my-1 bg-body shadow' style={{ padding: '0 2px' }}>

          <div onClick={() => { onClick }}>
            <ReactPlayer url={videoUrl} controls={false} width={'100%'} height="auto" playing={playing} volume={voulme} />

          </div>
          <VedioControl playing={playing} setPlaying={setPlaying} setVolume={setVolume} />

        </div>

      ) : (
        <Spinner />
      )}
    </>
  );
}

export default VedioPlayer;
