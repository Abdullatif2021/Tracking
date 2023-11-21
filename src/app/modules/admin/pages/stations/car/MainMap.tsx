import React, { useCallback, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';


import MapAccuracy from '../../../../apps/map/main/MapAccuracy';

// import MapCurrentLocation from '../map/MapCurrentLocation';

// import MapPadding from '../map/MapPadding';
import { devicesActions, truckPathActions } from '../../../../../../store';
import MapView from '../../../../apps/map/core/MapView';
import MapOverlay from '../../../../apps/map/overlay/MapOverlay';
import MapLiveRoutes from '../../../../apps/map/main/MapLiveRoutes';
import MapPositions from '../../../../apps/map/MapPositions';
import MapDefaultCamera from '../../../../apps/map/main/MapDefaultCamera';
import MapSelectedDevice from '../../../../apps/map/main/MapSelectedDevice';
import PoiMap from '../../../../apps/map/main/PoiMap';
import MapGeofence from '../../../../apps/map/MapGeofence';
import SocketCarController from '../manage/core/SocketCarController';
import { ArriveTerminal } from '../../../../car/services/truck';


// import MapOverlay from '../map/overlay/MapOverlay';
// import MapGeocoder from '../map/geocoder/MapGeocoder';
// import MapScale from '../map/MapScale';
// import MapNotification from '../map/notification/MapNotification';



const MainMap = ({ filteredPositions, selectedPosition, onEventsClick }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const checkArriveTerminal = useSelector((state: any) => state.truckPath.checkArriveTerminal)
  const terminals = useSelector((state: any) => state.truckPath.terminals)
  const path = useSelector((state: any) => state.truckPath.path);
  const currentTerminal = useSelector((state: any) => state.truckPath.currentTerminal);
  // const desktop = useMediaQuery(theme.breakpoints.up('md'));

  // const eventsAvailable = useSelector((state:any) => !!state.events.items.length);

  // const features = useFeatures();

  const onMarkerClick = useCallback((_, deviceId) => {
    dispatch(devicesActions.selectId(deviceId));
  }, [dispatch]);

  useEffect(() => {
    if (checkArriveTerminal) {
      dispatch(ArriveTerminal({
        "path_id": path,
        "terminal_id": currentTerminal?.id,
        "start":currentTerminal?.priority==1 ? 1 :0,
        "end": currentTerminal?.priority==terminals?.length ? 1 :0,
    })).then(()=>{
      dispatch(truckPathActions.updateArriveTerminal())
    })
     
    }
  }, [checkArriveTerminal])
//alert(JSON.stringify(filteredPositions.length))
//console.log(filteredPositions)
  return (
    <>
      {<SocketCarController />}
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
