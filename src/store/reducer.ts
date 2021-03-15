import * as actionTypes from './actionTypes';
import SortOptions from '../models/SortOptions';
import { getUsers, removeUser } from '../models/User';

type AppState = {
    users: Array<Object>,
    sortedBy: SortOptions,
    searchText: string,
}

const initialState: AppState = {
    users: getUsers(),
    sortedBy: SortOptions.ByFirstname,
    searchText: "",
}

const reducer = (state: AppState = initialState, action: any): AppState => {
    switch (action.type) {
        case actionTypes.CHANGE_SORT_OPTION:
            return {
                ...state,
                sortedBy: action.payload,
            }
        case actionTypes.ADD_USER:
            return {
                ...state,
            }
        case actionTypes.REMOVE_USER:
            const newUsersList = removeUser(state.users, action.payload);
            return {
                ...state,
                users: newUsersList,
            }
        case actionTypes.UPDATE_SEARH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            }
    }
    return state;
}

export default reducer;