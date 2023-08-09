import {charactersActionsTypes} from "../actions";

const initialState = {
    characters: []
};
const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case charactersActionsTypes.SETC:
            return {...state, characters: action.payload}
        default:
            return state
    }
}

export {
    charactersReducer
}
