import * as actionTypes from './actionTypes';
import SortOptions from '../models/SortOptions';
import { getUsers, removeUser, addUser, editUser } from '../models/User';

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
            const newUsers = addUser(state.users, action.payload);
            return {
                ...state,
                users: newUsers,
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
        case actionTypes.EDIT_USER:
            const newUsersLst = editUser(state.users, action.payload.idx, action.payload.userData);
            return {
                ...state,
                users: newUsersLst,
            }
    }
    return state;
}

export default reducer;