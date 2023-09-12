import { GET_AUTOS , GET_PROFILE } from "../types";

const AutosReducer = (state, action) => {
    const { payload, type } = action

    switch (type) {
        case GET_AUTOS:
            return {
                ...state,
                autos: payload
            }
        case  GET_PROFILE:
            return {
                ...state,
                selectedAuto:payload
            }    

        default:
            return state;
    }
}

export default AutosReducer;