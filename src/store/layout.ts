import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
interface LayouState {
  showToolbar: boolean
}

const initialState: LayouState = {
  showToolbar: true,
}
const {reducer, actions} = createSlice({
  name: 'layoutManager',
  initialState,
  reducers: {
    setToolbar(state, action) {
      state.showToolbar = action.payload
    },
  },
  extraReducers: {},
})

export {actions as layoutManagerActions}
export {reducer as layoutManagerReducer}
