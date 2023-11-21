import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';


import MapAccuracy from '../../../../apps/map/main/MapAccuracy';

// import MapCurrentLocation from '../map/MapCurrentLocation';

// import MapPadding from '../map/MapPadding';
import { devicesActions } from '../../../../../../store';


// import MapOverlay from '../map/overlay/MapOverlay';
// import MapGeocoder from '../map/geocoder/MapGeocoder';
// import MapScale from '../map/MapScale';
// import MapNotification from '../map/notification/MapNotification';

import MapView from '../../../../apps/map/core/MapView';
import MapSelectedDevice from '../../../../apps/map/main/MapSelectedDevice';
import MapGeofence from '../../../../apps/map/MapGeofence';
import PoiMap from '../../../../apps/map/main/PoiMap';
import useFeatures from '../../../../../../_metronic/helpers/common/util/useFeatures';
import MapDefaultCamera from '../../../../apps/map/main/MapDefaultCamera';
import MapOverlay from '../../../../apps/map/overlay/MapOverlay';
import MapLiveRoutes from '../../../../apps/map/main/MapLiveRoutes';
import MapPositions from '../../../../apps/map/MapPositions';
import TerminalMapCamera from '../../../../apps/map/main/TerminalMapCamera';

const MainMap = ({ filteredPositions, selectedPosition, onEventsClick }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // const desktop = useMediaQuery(theme.breakpoints.up('md'));

  // const eventsAvailable = useSelector((state:any) => !!state.events.items.length);

  // const features = useFeatures();

  const onMarkerClick = useCallback((_, deviceId) => {
    dispatch(devicesActions.selectId(deviceId));
  }, [dispatch]);
//alert(JSON.stringify(filteredPositions.length))
//console.log(filteredPositions)
  return (
    <>
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
        <TerminalMapCamera />
        <MapSelectedDevice />
        <PoiMap />
      </MapView>
      {/* <MapScale /> */}
      {/* <MapCurrentLocation />
      <MapGeocoder />
      {!features.disableEvents && (
        <MapNotification enabled={eventsAvailable} onClick={onEventsClick} />
      )}
      {desktop && (
        <MapPadding left={parseInt(theme.dimensions.drawerWidthDesktop, 10)} />
      )} */}
    </>
  );
};

export default MainMap;
