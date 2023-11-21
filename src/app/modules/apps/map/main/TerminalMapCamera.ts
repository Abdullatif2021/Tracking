import maplibregl from 'maplibre-gl'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {map} from '../core/MapView'
import {usePreference} from '../../../../../_metronic/helpers/common/util/preferences'

const TerminalMapCamera = () => {
  const devicesDistance = useSelector((state: any) => state.terminalPath.devicesDistance)
  const selectedDeviceId = useSelector((state: any) => state.devices.selectedId)
  const positions = useSelector((state: any) => state.session.positions)
  const stations = useSelector((state: any) => state.devices.stations)
  const defaultLatitude = usePreference('latitude')
  const defaultLongitude = usePreference('longitude')
  const defaultZoom = usePreference('zoom', 0)
  useEffect(() => {

    if (defaultLatitude && defaultLongitude) {
      map.jumpTo({
        center: [defaultLongitude, defaultLatitude],
        zoom: defaultZoom,
      })
    } else {
      //alert(JSON.stringify(devicesDistance))
      //.filter(x=>devicesDistance.slice(0,4).map(x=>x.deviceId).includes(x.deviceId)
      const coordinates: any = Object.values(positions)
        .filter((x: any) =>
          devicesDistance.filter(x=>x.distance < 7000 && x.online==true)
            .slice(0, 3)
            .map((x) => x.deviceId)
            .includes(x.deviceId)
        )
        .map((item: any) => [item.longitude, item.latitude])
      stations.map((item, index) => {
        coordinates.push([item.longitude, item.latitude])
      })


      if (coordinates.length > 1) {
        const bounds = coordinates.reduce(
          (bounds, item) => bounds.extend(item),
          new maplibregl.LngLatBounds(coordinates[0], coordinates[1])
        )
        const canvas = map.getCanvas()
        map.fitBounds(bounds, {
          duration: 0,
          padding: Math.min(canvas.width, canvas.height) * 0.1,
        })
      } else if (coordinates.length) {
        const [individual] = coordinates
        map.jumpTo({
          center: individual,
          zoom: Math.max(map.getZoom(), 13),
        })
      }
    }
    //}
  }, [devicesDistance, defaultLatitude, defaultLongitude, defaultZoom, positions])
  //positions
  return null
}
//
export default TerminalMapCamera
