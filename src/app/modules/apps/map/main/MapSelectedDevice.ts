import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { map } from '../core/MapView';

import { usePrevious } from '../../../../../reactHelper';
import { useAttributePreference } from '../../../../../_metronic/helpers/common/util/preferences';
import dimensions from '../../../../../_metronic/helpers/common/theme/dimensions';

const MapSelectedDevice = () => {
  const selectedDeviceId = useSelector((state:any) => state.devices.selectedId);
  const previousDeviceId = usePrevious(selectedDeviceId);

  const selectZoom = useAttributePreference('web.selectZoom', 10);
  const mapFollow = useAttributePreference('mapFollow', false);

  const position = useSelector((state:any) => state.session.positions[selectedDeviceId]);

  useEffect(() => {
    if ((selectedDeviceId !== previousDeviceId || mapFollow) && position) {
      map.easeTo({
        center: [position.longitude, position.latitude],
        zoom: Math.max(map.getZoom(), selectZoom),
        offset: [0, -dimensions.popupMapOffset / 2],
      });
    }
  });

  return null;
};

export default MapSelectedDevice;
