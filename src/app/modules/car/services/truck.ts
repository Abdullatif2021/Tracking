import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const ArriveTerminal: any = createAsyncThunk(
    "ArriveTerminal",
    async (values ,thunkAPI: any) => {
        try {
            const res = await axios.post('/edit_path', values)
            if (!res.data.error_code) {
                return res.data.data;
            }
            else {
                return thunkAPI.rejectWithValue(res.data.error_description)
            }
        }
        catch {
            thunkAPI.rejectWithValue('There is Error');
        }

    }
);
