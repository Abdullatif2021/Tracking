import React, {useState, useCallback, useEffect, FC} from 'react'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useDispatch, useSelector} from 'react-redux'
import {devicesActions, } from '../../../../../../store'
import useFilter from './useFilter'
import MainMap from './MainMap'
import {useAttributePreference} from '../../../../../../_metronic/helpers/common/util/preferences'
import usePersistedState from '../../../../../../_metronic/helpers/common/util/usePersistedState'
import StatusCard from '../../../../../../_metronic/helpers/common/components/StatusCard'
import { map } from '../../../../apps/map/core/MapView'
import { isDeviceWithinBounds, useEffectAsync } from '../../../../../../reactHelper'
import { Spinner } from '../../../../../../_metronic/helpers/components/Spinner'
import { DeviceListWrapper } from '../../../../apps/map/DeviceListWrapper'
const Main = () => {
  const loading = useSelector((state) => state.devices.loading)
  const dispatch = useDispatch()
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const mapOnSelect = useAttributePreference('mapOnSelect', true)
  const selectedDeviceId = useSelector((state) => state.devices.selectedId)
  const positions = useSelector((state) => state.session.positions)
  const [filteredPositions, setFilteredPositions] = useState([])
  const selectedPosition = filteredPositions.find(
    (position) => selectedDeviceId && position.deviceId === selectedDeviceId
  )

  const [filteredDevices, setFilteredDevices] = useState([])

  const [keyword, setKeyword] = useState('')
  const [filter, setFilter] = usePersistedState('filter', {
    statuses: [],
    groups: [],
  })
  const [filterSort, setFilterSort] = usePersistedState('filterSort', '')
  const [filterMap, setFilterMap] = usePersistedState('filterMap', false)

  const [devicesOpen, setDevicesOpen] = useState(desktop)
  const [eventsOpen, setEventsOpen] = useState(false)

  const onEventsClick = useCallback(() => setEventsOpen(true), [setEventsOpen]);

  const [filterDevices,setFilterDevices]=useState([])

  useEffect(() => {
    if (!desktop && mapOnSelect && selectedDeviceId) {
      setDevicesOpen(false)
    }
  }, [desktop, mapOnSelect, selectedDeviceId])
  useFilter(
    keyword,
    filterDevices,
    filter,
    filterSort,
    filterMap,
    positions,
    setFilteredDevices,
    setFilteredPositions
  )


  useEffectAsync(async () => {
    let email = "test@test.test";
    let password = "test";
    const auth = btoa(`${email}:${password}`);
    const response = await fetch(`${process.env.REACT_APP_TRUCKGPS_API_URL}/devices`, {
      credentials: 'include',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    
    if (response.ok) {
      dispatch(devicesActions.refresh(await response.json()));
    
    } else {
      throw Error(await response.text());
    }
  }, []);

  map.on('moveend', () => {
    const bounds = map.getBounds();
    const visibleDevices = Object.values(positions).filter(device =>
      isDeviceWithinBounds(device, bounds)
    );

    setFilterDevices(visibleDevices.map((item)=>item.deviceId))

  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='h-100 w-100 position-relative'>
          <MainMap
            filteredPositions={filteredPositions}
            selectedPosition={selectedPosition}
            onEventsClick={onEventsClick}
          />

          <DeviceListWrapper  devices={filteredDevices} keyword={keyword} setKeyword={setKeyword}/>
          {selectedDeviceId && (
            <StatusCard
              deviceId={selectedDeviceId}
              position={selectedPosition}
              onClose={() => dispatch(devicesActions.selectId(null))}
              desktopPadding={360}
            />
          )}
        </div>
      )}
    </>
  )
}

export default Main


