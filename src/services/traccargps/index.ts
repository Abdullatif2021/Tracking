import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ID} from '../../_metronic/helpers'
const token: string = localStorage.getItem('kt-auth-react-v') ?? JSON.stringify('')
const API_URL = process.env.REACT_APP_API_URL
export const GetCurrentDevice: any = createAsyncThunk('device', async (id: any, thunkAPI: any) => {
  try {
    if (id) {
      const res = await axios.get(`/vehicles_info/${id}`)
      if (!res.data.error_code) {
        return res.data.data
      } else {
        return thunkAPI.rejectWithValue(res.data.error_description)
      }
    } else {
      const res = await axios.post(API_URL + '/my_path')
      if (!res.data.error_code) {
        return res.data.data
      } else {
        return thunkAPI.rejectWithValue(res.data.error_description)
      }
    }
  } catch {
    thunkAPI.rejectWithValue('There is Error')
  }
})
export const GetCurrentTerminal: any = createAsyncThunk('terminal', async (id: any, thunkAPI: any) => {
  try {
    if (id) {
      const res = await axios.get(`/terminal_info/${id}`)
      if (!res.data.error_code) {
      //   let temp= [
      //     {
      //         "id": 6,
      //         "name": "Main",
      //         "count": 5,
      //         "terminal": [
      //             {
      //                 "id": 11,
      //                 "name": "terminal 5",
      //                 "longitude": "46.7111682",
      //                 "latitude": "24.9417134",
      //                 "voice": "https://tmbo.app/cars/fleet/framework/public/images/alarm.mp3",
      //                 "priority": 1,
      //                 "status": 0,
      //                 "time": null
      //             }
      //         ],
      //         "Miles": "1.42",
      //         "Kilometers": "2.29",
      //         "Nautical": "1.24",
      //         "hours": "00",
      //         "minutes": 1,
      //         "time": "00:01",
      //         "ads": [
      //             {
      //                 "id": 1,
      //                 "name": "ads 1",
      //                 "link": "https://tmbo.app/cars/fleet/framework/public/images/videoplayback.mp4",
      //                 "time": 8
      //             }
      //         ],
      //         "current_time": "19:21:06",
      //         "devices": [
      //             {
      //                 "id": 6,
      //                 "attributes": [],
      //                 "groupId": 0,
      //                 "name": "RUH-01",
      //                 "uniqueId": "863540060245173",
      //                 "status": "unknown",
      //                 "lastUpdate": "2023-05-24T10:06:27.000+00:00",
      //                 "positionId": 1268292,
      //                 "geofenceIds": null,
      //                 "phone": null,
      //                 "model": "",
      //                 "contact": null,
      //                 "category": "bus",
      //                 "disabled": false,
      //                 "expirationTime": null
      //             },
      //             {
      //                 "id": 3,
      //                 "attributes": [],
      //                 "groupId": 0,
      //                 "name": "Ghazi",
      //                 "uniqueId": "624775",
      //                 "status": "offline",
      //                 "lastUpdate": "2023-04-10T05:58:03.000+00:00",
      //                 "positionId": 610702,
      //                 "geofenceIds": null,
      //                 "phone": "",
      //                 "model": "Ghazi",
      //                 "contact": null,
      //                 "category": null,
      //                 "disabled": false,
      //                 "expirationTime": null
      //             },
      //             {
      //                 "id": 2,
      //                 "attributes": [],
      //                 "groupId": 0,
      //                 "name": "Mudhsh",
      //                 "uniqueId": "538453",
      //                 "status": "offline",
      //                 "lastUpdate": "2023-05-21T17:36:17.000+00:00",
      //                 "positionId": 1231150,
      //                 "geofenceIds": null,
      //                 "phone": null,
      //                 "model": "Mudhsh",
      //                 "contact": null,
      //                 "category": null,
      //                 "disabled": false,
      //                 "expirationTime": null
      //             }
      //         ]
      //     }
      // ];
        return  res.data.data      
      } else {
        return thunkAPI.rejectWithValue(res.data.error_description)
      }
    } else {
      const res = await axios.post(API_URL + '/my_path')
      if (!res.data.error_code) {
        console.log(res.data.data)
        return res.data.data
      } else {
        return thunkAPI.rejectWithValue(res.data.error_description)
      }
    }
  } catch {
    thunkAPI.rejectWithValue('There is Error')
  }
})
export const GetPageTimes: any = createAsyncThunk('pageTime', async (thunkAPI: any) => {
  try {
    const res = await axios.post(API_URL + '/page')
    if (!res.data.error_code) {
      return res.data.data
    } else {
      return thunkAPI.rejectWithValue(res.data.error_description)
    }
  } catch {
    thunkAPI.rejectWithValue('There is Error')
  }
})

export const GetStationInfo: any = createAsyncThunk(
  'station_info',
  async (id: ID, thunkAPI: any) => {
    try {
      const res = await axios.get(`station_info/${id}`)
      if (!res.data.error_code) {
        return res.data.data
      } else {
        return thunkAPI.rejectWithValue(res.data.error_description)
      }
    } catch {
      thunkAPI.rejectWithValue('There is Error')
    }
  }
)
