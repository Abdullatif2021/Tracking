import {createAsyncThunk} from '@reduxjs/toolkit'
import {Coordinate} from '../core/_models'
const accessToken =
  'pk.eyJ1IjoicmloYWEiLCJhIjoiY2xqbXk2MjlmMTI3YTNlbnU2amUzanVmZSJ9.Di26J21JYik1Ayen9n-LyA' // process.env.ACCESSTOKEN;
const API_URL = 'https://api.mapbox.com/directions/v5/mapbox/driving-traffic' // process.env.MAP_URL;

interface Value {
  distance: number
  duration: number
  deviceId: number
}

interface MyObject {
  [key: string]: Value
}

export const checkArrivedDevices: any = createAsyncThunk(
  'checkArrivedDevices',
  async (values: any, thunkAPI) => {
    try {
      var devicesLocaton: any = values.devicesLocaton
      var terminalLoc: Coordinate = values.terminalLoc
      // Return the sorted array of objects
      var tempLoc: MyObject = {}
      for (const key in devicesLocaton) {
        let loc = devicesLocaton[key]
        const apiUrl = `${API_URL}/${loc.lon},${loc.lat};${terminalLoc.lon},${terminalLoc.lat}?annotations=duration&access_token=${accessToken}`

        const response = await fetch(apiUrl)
        const tem = await response.json()
        const distance = tem.routes[0].distance
        const duration = tem.routes[0].duration
        tempLoc[key] = {
          distance: distance,
          duration: duration,
          deviceId: parseInt(key),
        }
      }

      const sortedKeys = Object.keys(tempLoc).sort(
        (a, b) => tempLoc[a].duration - tempLoc[b].duration
      )
      const reorderedObj = {}

      sortedKeys.forEach((key, index) => {
        reorderedObj[index + 1] = tempLoc[key]
      })
      console.log('sortedKeys')
      console.log(Object.fromEntries(Object.entries(reorderedObj)))
      const sortedObj: MyObject = Object.fromEntries(Object.entries(reorderedObj))

      return sortedObj
    } catch {
      thunkAPI.rejectWithValue('There is Error')
    }
  }
)

// export const checkDeviceDistanceByStation = createAsyncThunk(
//   "checkDeviceDistanceByStation",
//   async (values :any, thunkAPI) => {
//     try {

//       var devicseLoc = values.devicseLoc;
//       var stationLoc = values.stationLoc
//       // Return the sorted array of objects
//       var tempLoc = [];
//       for (var i = 0; i < devicseLoc.length; i++) {
//         const lat = devicseLoc[i]?.lat;
//         const lon = devicseLoc[i]?.lon;
//         const apiUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${stationLoc.lon},${stationLoc.lat};${lon},${lat}?annotations=duration&access_token=${accessToken}`;
//         const response = await fetch(apiUrl);

//         const tem = await response.json();
//         const distance = tem.routes[0].distance
//         const duration = tem.routes[0].duration;
//         //alert(devicseLoc[i].deviceId)
//         tempLoc.push({
//           id: devicseLoc[i].deviceId,
//           distance: distance,
//           duration: duration //calculateDuration(distance, devicseLoc[i]?.speed )

//         })

//       }

//       tempLoc.sort((a, b) => a.distance - b.distance);
//       return tempLoc;

//     } catch {
//       thunkAPI.rejectWithValue("There is Error");
//     }
//   }
// );
