import {configureStore} from "@reduxjs/toolkit";

import {charactersReducer, episodesReducer, progressReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer,
        progress: progressReducer
    }
});

export {
    store
}
