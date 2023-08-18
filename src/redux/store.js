import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodesReducer, progressReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
        progress: progressReducer,
        theme: themeReducer
    }
});

export {
    store
}
