import {useEffect, useRef} from 'react'
import Hls from 'hls.js'

interface UseHlsPlayerProps {
  url: string
}

interface UseHlsPlayerResult {
  videoRef: React.RefObject<HTMLVideoElement>
}

const useHlsPlayer = ({url}: UseHlsPlayerProps): UseHlsPlayerResult => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const hls = new Hls()

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(videoRef.current)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current?.play()
      })
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = url
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current?.play()
      })
    }
    return () => {
      hls.destroy()
    }
  }, [url])

  return {videoRef}
}

export default useHlsPlayer
