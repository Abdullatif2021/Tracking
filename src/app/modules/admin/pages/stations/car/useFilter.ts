import { useEffect } from 'react';
import { useSelector } from 'react-redux';
export default (keyword, filterDevices, filter, filterSort, filterMap, positions, setFilteredDevices, setFilteredPositions) => {
  const devices = useSelector((state: any) => state.devices.items);
  useEffect(() => {
    let temp = Object.values(devices);

    const filtered = Object.values(devices)
      .filter((device: any) => filterDevices.length > 0 ? filterDevices.includes(device.id) : true)
      .filter((device: any) => {
        const lowerCaseKeyword = keyword.toLowerCase();
        return [device.name, device.uniqueId, device.phone, device.model, device.contact].some((s) => s && s.toLowerCase().includes(lowerCaseKeyword));
      });
    setFilteredDevices(filtered);
    setFilteredPositions(filterMap
      ? filtered.map((device: any) => positions[device.id]).filter(Boolean)
      : Object.values(positions));
  }, [keyword,filterDevices, filter, filterSort, filterMap, devices, positions, setFilteredDevices, setFilteredPositions]);
};
//groups,