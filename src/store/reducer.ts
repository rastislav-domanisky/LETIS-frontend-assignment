import * as actionTypes from "./actionTypes";

type AppState = {
    users: [],
}

const initialState: AppState = {
    users: [],
}

const reducer = (state: AppState = initialState, action: any): AppState => {
    switch (action.type) {
        case actionTypes.ADD_USER:
            return {
                ...state,
            }
        case actionTypes.REMOVE_USER:
            return {
                ...state,
            }
    }
    return state;
}

export default reducer;