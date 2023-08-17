import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    isLoading: false
};
const slice = createSlice({
    name: 'progressSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

const {reducer: progressReducer, actions: progressActions} = slice;

export {
    progressActions,
    progressReducer
}
