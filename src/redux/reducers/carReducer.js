import {carActionsTypes} from "../actions";

const initialState = {
    cars: [],
    carForUpdate: null
};
const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionsTypes.SET_CARS:
            return {
                ...state,
                cars: action.payload
            }
        case carActionsTypes.SET_CAR_FOR_UPDATE:
            return {
                ...state,
                carForUpdate: action.payload
            }
        default:
            return state
    }
}

export {
    carReducer
}
