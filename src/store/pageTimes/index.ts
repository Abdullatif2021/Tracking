import { createSlice } from "@reduxjs/toolkit";
import { GetPageTimes } from "../../services/traccargps";
import { GetUserTypes } from "../../services/sidebar";
interface userType {
    id: number,
    name: string
}

interface PageTImeState {
    loading: boolean,
    landingTime: number,
    destinationTime: number,
    userTypes: userType[],
    error: string
}
const initialState: PageTImeState = {
    error: "",
    loading: false,
    landingTime: 5,
    destinationTime: 3,
    userTypes: []
}

const { reducer, actions } = createSlice({
    name: "pageTimeManager",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(GetPageTimes.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(GetPageTimes.fulfilled, (state, { payload }) => {
            state.loading = false;
            var pagePeriod = payload.filter(x => x.code == 'destination_page')
            if (pagePeriod.length > 0) {
                var time = parseInt(pagePeriod[0]?.time)
                state.landingTime = time;
                state.destinationTime = time;

            }
        })

        builder.addCase(GetPageTimes.rejected, (state, { payload }) => {
            state.loading = false;
        })

        builder.addCase(GetUserTypes.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(GetUserTypes.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.userTypes = payload.map((item) => {
                return {
                    id: item.id,
                    name: item.name
                }
            })
         
        })

        builder.addCase(GetUserTypes.rejected, (state, { payload }) => {
            state.loading = false;
        })

        // [GetPageTimes.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [GetPageTimes.fulfilled]: (state, action) => {
        //     state.loading = false;

        //     var pagePeriod = action.payload.filter(x => x.code == 'destination_page')
        //     if (pagePeriod.length > 0) {
        //         var time = parseInt(pagePeriod[0]?.time)
        //         state.landingTime = time;
        //         state.destinationTime = time;

        //     }

        // },
        // [GetPageTimes.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;

        // },


    },
});

export { actions as pageTimeManagerActions };
export { reducer as pageTimeManagereReducer };
