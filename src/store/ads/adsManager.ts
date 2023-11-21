import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: "adsManager",
    initialState: {
        error: null,
        loading: false,
        ads: [], // Array of ads
        currentAd: null, // Index of the current ad to show
        showAdAfter: 5000, // Time in milliseconds to show an ad after the project runs
        showAds: false,// Whether to show an ad or not
        isLoadedAds: false,

    },
    reducers: {
        setAds(state, action) {
            let data = action.payload;
            const now = new Date();
            state.ads = data?.map((ad, i) => ({
                ...ad,
                timeToShow: new Date(now.getTime() + (ad.time) * 1000), // show each ad 1 minute after the previous ad
                displayed: false,
            }));
        },
        setLoadedAds(state, action) {
            state.isLoadedAds = action.payload;
        },
        setShowAds(state, action) {
            state.showAds = action.payload;
        },
        setAdDisplayed(state: any, action) {
            const temp = state.ads;
          
            state.ads = temp.map((item: any) => {
                return {
                    ...item,
                    displayed: item.id == action.payload ? true : item?.seen,
                }
            });
            state.currentAd = undefined;
        },
        setCurrentAd(state, action) {
            state.currentAd = action.payload;
            state.showAds = true;

        },

        checkShowAds(state: any) {
            const now = new Date();
            const ads = state.ads;
            const adsToDisplay = ads.filter((ad: any) => now >= new Date(ad.timeToShow) && !ad.displayed);
            if (adsToDisplay.length > 0) {
                state.currentAd = adsToDisplay[0];
                state.showAds = true;

            }
        },
    },
    extraReducers: {


    },
});

export { actions as adsManagerActions };
export { reducer as adsManagerReducer };
