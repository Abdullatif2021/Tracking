import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';

import MapAccuracy from '../../../../apps/map/main/MapAccuracy';


import { devicesActions } from '../../../../../../store';
import MapView from '../../../../apps/map/core/MapView';
import MapOverlay from '../../../../apps/map/overlay/MapOverlay';
import MapLiveRoutes from '../../../../apps/map/main/MapLiveRoutes';
import MapPositions from '../../../../apps/map/MapPositions';
import MapDefaultCamera from '../../../../apps/map/main/MapDefaultCamera';
import MapSelectedDevice from '../../../../apps/map/main/MapSelectedDevice';
import PoiMap from '../../../../apps/map/main/PoiMap';
import MapGeofence from '../../../../apps/map/MapGeofence';
import SocketTerminalController from '../manage/core/SocketTerminalController';



const MainMap = ({ filteredPositions, selectedPosition, onEventsClick }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const onMarkerClick = useCallback((_, deviceId) => {
    dispatch(devicesActions.selectId(deviceId));
  }, [dispatch]);

  return (
    <>
      {<SocketTerminalController />}
      <MapView>
        <MapOverlay />
        <MapGeofence />
        <MapAccuracy positions={filteredPositions} />
        <MapLiveRoutes />
        <MapPositions
          positions={filteredPositions}
          onClick={onMarkerClick}
          selectedPosition={selectedPosition}
          showStatus
          titleField={undefined}
        />
        <MapDefaultCamera />
        <MapSelectedDevice />
        <PoiMap />
      </MapView>
    </>
  );
};

export default MainMap;
