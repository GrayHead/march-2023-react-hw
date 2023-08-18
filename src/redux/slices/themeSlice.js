import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    themeCheck: false
};
const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeThemeCheck: state => {
            state.themeCheck = !state.themeCheck
        }
    }
})

const {reducer:themeReducer, actions:themeActions} = themeSlice;
export {
    themeActions,
    themeReducer
}
