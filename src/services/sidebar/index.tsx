import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ID} from '../../_metronic/helpers'
const token: string = localStorage.getItem('kt-auth-react-v') ?? JSON.stringify('')
const API_URL = process.env.REACT_APP_API_URL

export const GetUserTypes: any = createAsyncThunk(
  'list_active_users_type',
  async (id: ID, thunkAPI: any) => {
    try {
      const res = await axios.get(`list_active_users_type`)
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
