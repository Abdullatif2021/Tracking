import {FC, useEffect, useRef, useState} from 'react'
import {useQuery} from 'react-query'
import {useLocation} from 'react-router-dom'
import {QUERIES, isNotEmpty} from '../../../../../../../_metronic/helpers'
import {getCameraToVehicle} from '../core/_requests'
import {Spinner} from '../../../../../../../_metronic/helpers/components/Spinner'
import VedioPlayer from '../../../vedio-stream/components/LiveStream'
import {CameraShow} from '../core/_models'
import SplitStyle from './SplitStyle'
import SingleStyle from './SingleStyle'
import useHlsPlayer from '../../../../../../../_metronic/hooks/useHlsPlayer'
import ReactHlsPlayer from 'react-hls-player'
import {getInfo, getLiveCamera} from '../../live/core/_requests'
import HLSVideo from '../../../../../../../_metronic/helpers/components/HLSVideo'
import ReactPlayer from 'react-player'

const videoUrl1 = 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8'
const videoUrl2 =
  'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'
const videoCameraUrl1 =
  'http://192.168.10.55:83/sms/HCPEurl/commonvideobiz_6hdOgdmGh7IzqYX3Rf%2FQqpI27%2B9cuxXB4Z0zXbyJgRZp0Kb2zJpuajhd42kLPoHPSVk5tyqSRH6bcAYfaKTODwnvPTnjZa9sZaAgS%2FwziEAbqkCpgg%2BtC87dOIllYpg00C8t3maeNoH71AIF7nezO4UQu6UTjKYaZsIVrxP6UkGTrimoqQyH5h495K7vGkoPJ3OIKMTORYZ%2B2tgDGc2wSLFnDrH%2Frc96i%2BZm04IgcFM%3D/live.m3u8'

const ViewCameraVehicle: FC = () => {
  const location = useLocation()
  const id: any = location.state
  const [displayStyle, setDisplayStyle] = useState(CameraShow.Four) // Default display style is 'four'
  // const videoRef = useRef(null) //useHlsPlayer({url: videoCameraUrl1})

  const [camerasInfo, setCamerasInfo] = useState([])
  const [camerasLive, setCamerasLive] = useState([])
  const [IsLoading, setIsLoading] = useState(false)
  const {videoRef} = useHlsPlayer({url: videoCameraUrl1})
  const handleStyleChange = (style) => {
    setDisplayStyle(style)
  }

  useEffect(() => {
    setIsLoading(true)
    getInfo()
    .then((d: any) => {
      let list = d.data?.data?.data?.list || []
      setCamerasInfo(list)
    })
    .catch((err) => {
      console.log('error :>> ', err)
    })
  }, [])

  useEffect(() => {
    if (camerasInfo.length > 0) {
      let tempCameraLive = []
      camerasInfo.forEach((camera, index) => {
        getLiveCamera(camera.cameraIndexCode)
        .then((d: any) => {
          tempCameraLive.push(d.data?.data?.data?.url)
          if (index === camerasInfo.length - 1) {
            setCamerasLive(tempCameraLive)
            setIsLoading(false)
          }
        })
        .catch((err) => {
          console.log('err :>> ', err)
        })
      })
    }
  }, [camerasInfo])

  const {data: data} = useQuery(
    `${QUERIES.CAMERA_VEHICLE_LIST_VALUES}`,
    () => {
      return getCameraToVehicle(id)
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false, enabled: isNotEmpty(id)}
  )

  return (
    <>
      {console.log('camerasLive >> ', camerasLive)}
      {camerasLive.length > 0 && (
        <div className='container p-2 bg-body'>
          <header className='my-2'>
            <button
              className={`btn ${
                displayStyle == CameraShow.Four ? 'btn-danger' : 'btn-primary'
              } mx-1`}
              onClick={() => handleStyleChange(CameraShow.Four)}
            >
              Option 1
            </button>
            <button
              className={`btn ${
                displayStyle == CameraShow.Three ? 'btn-danger' : 'btn-primary'
              }  mx-1`}
              onClick={() => handleStyleChange(CameraShow.Three)}
            >
              Option 2
            </button>
            <button
              className={`btn ${
                displayStyle == CameraShow.Split ? 'btn-danger' : 'btn-primary'
              }  mx-1`}
              onClick={() => handleStyleChange(CameraShow.Split)}
            >
              Option 3
            </button>
            <button
              className={`btn ${
                displayStyle == CameraShow.Single ? 'btn-danger' : 'btn-primary'
              }  mx-1`}
              onClick={() => handleStyleChange(CameraShow.Single)}
            >
              Option 4
            </button>
          </header>
          <div className='row d-flex'>
            {/* <>
              <h1>Test Hls Player</h1>
              <ReactHlsPlayer 
                src={videoCameraUrl1}
                autoPlay={false}
                controls={true}
                width='100%'
                playerRef={videoRef}
                height='auto'
              />{' '}
            </> */}
            {/* <ReactPlayer
              url='http://192.168.10.55:83/sms/HCPEurl/commonvideobiz_6hdOgdmGh7IzqYX3Rf%2FQqpI27%2B9cuxXB4Z0zXbyJgRZp0Kb2zJpuajhd42kLPoHPSVk5tyqSRH6bcAYfaKTODwnvPTnjZa9sZaAgS%2FwziEAbqkCpgg%2BtC87dOIllYpg00C8t3maeNoH71AIF7nezO4UQu6UTjKYaZsIVrxP6UkGTrimoqQyH5h495K7vGkoPJ3OIKMTORYZ%2B2tgDGc2wSPd2O3GxMLC6xMSza7vBaZk%3D/live.m3u8'
              playing
              controls
              width='100%'
              height='auto'
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                  forceHLS: false,
                  forceVideo: true,
                  hlsVersion: '0.13.2',
                  hlsOptions: {
                    enableSoftwareAES: false,
                    manifestLoadingTimeOut: 10000,
                    manifestLoadingMaxRetry: 3,
                    levelLoadingTimeOut: 10000,
                    levelLoadingMaxRetry: 3,
                    fragLoadingTimeOut: 10000,
                    fragLoadingMaxRetry: 3,
                  },
                },
              }}
            /> */}
            {displayStyle === CameraShow.Four && (
              <>
                {camerasLive.map((cameraUrl, index) => {
                  return (
                    <div className='col-md-3 '>
                      <HLSVideo key={`camera 4 ${index}`} url={cameraUrl} controls />
                    </div>
                  )
                })}
              </>
            )}

            {displayStyle === CameraShow.Three && (
              <>
                {camerasLive.map((cameraUrl, index) => {
                  return (
                    <div className='col-md-4'>
                      <HLSVideo key={`camera 4 ${index}`} url={cameraUrl} controls />
                    </div>
                  )
                })}
              </>
            )}

            {displayStyle === CameraShow.Split && (
              <SplitStyle
                data={camerasLive.map((cameraUrl, index) => {
                  return {
                    code: `camera 2 ${index}`,
                    videoUrl: cameraUrl,
                  }
                })}
              />
            )}

            {displayStyle === CameraShow.Single && (
              <SingleStyle
                data={camerasLive.map((cameraUrl, index) => {
                  return {
                    code: `camera 1 ${index}`,
                    videoUrl: cameraUrl,
                  }
                })}
              />
            )}
          </div>
        </div>
      )}
      {IsLoading && <Spinner />}
    </>
  )
}

export default ViewCameraVehicle
