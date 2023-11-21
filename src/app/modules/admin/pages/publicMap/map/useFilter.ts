import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default (keyword, filterDevices, filter, filterSort, filterMap, positions, setFilteredDevices, setFilteredPositions) => {
  //const groups = {} // useSelector((state) => state.groups.items);

  const devices = useSelector((state: any) => state.devices.items);
  useEffect(() => {
    /*  const deviceGroups = (device :any) => {
        const groupIds :any = [];
        let { groupId } = device;
        while (groupId) {
          groupIds.push(groupId);
          groupId = groups[groupId]?.groupId || 0;
        }
        return groupIds;
      };*/
    let temp = Object.values(devices);

    const filtered = Object.values(devices)
      //.filter()
      .filter((device: any) => filterDevices.includes(device.id))
      //  .filter((device:any) => !filter.groups.length || deviceGroups(device).some((id) => filter.groups.includes(id)))
      .filter((device: any) => {
        const lowerCaseKeyword = keyword.toLowerCase();
        return [device.name, device.uniqueId, device.phone, device.model, device.contact].some((s) => s && s.toLowerCase().includes(lowerCaseKeyword));
      });
    /* switch (filterSort) {
       case 'name':
         filtered.sort((device1:any, device2:any) => device1.name.localeCompare(device2.name));
         break;
       case 'lastUpdate':
         filtered.sort((device1:any, device2:any) => {
           const time1 = device1.lastUpdate ? moment(device1.lastUpdate).valueOf() : 0;
           const time2 = device2.lastUpdate ? moment(device2.lastUpdate).valueOf() : 0;
           return time2 - time1;
         });
         break;
       default:
         break;
     }*/
    setFilteredDevices(filtered);
    setFilteredPositions(filterMap
      ? filtered.map((device: any) => positions[device.id]).filter(Boolean)
      : Object.values(positions));
  }, [keyword,filterDevices, filter, filterSort, filterMap, devices, positions, setFilteredDevices, setFilteredPositions]);
};
//groups,