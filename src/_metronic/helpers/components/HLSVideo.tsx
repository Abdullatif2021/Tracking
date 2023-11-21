import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import urlParse from 'url-parse'

interface HLSVideoProps {
  url: string
  codecs?: string
  [key: string]: any
}

const HLSVideo: React.FC<HLSVideoProps> = ({url, codecs = 'avc1.64001e,mp4a.40.2', ...rest}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const {protocol, host, pathname} = urlParse(url)

    const mediaSource = new MediaSource()
    videoRef.current!.src = URL.createObjectURL(mediaSource)

    mediaSource.addEventListener('sourceopen', async () => {
      const sourceBuffer = mediaSource.addSourceBuffer(`video/mp4; codecs="${codecs}"`)

      const playlist = await fetch(url).then((res) => res.text())
      const segments = playlist
      .split('\n')
      .filter((line) => line.trim() && !line.startsWith('#'))
      .map((segmentUrl) => `${protocol}//${host}${pathname}/${segmentUrl}`)

      for (const segmentUrl of segments) {
        const segment = await fetch(segmentUrl).then((res) => res.arrayBuffer())
        sourceBuffer.appendBuffer(segment)
      }

      videoRef.current!.play()
    })
  }, [url, codecs])

  return <video ref={videoRef} {...rest} />
}

HLSVideo.propTypes = {
  url: PropTypes.string.isRequired,
  codecs: PropTypes.string,
}

export default HLSVideo
