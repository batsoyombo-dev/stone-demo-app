import { LOAD_USER, USER_LOADED, USER_LOADING, USER_LOAD_ERROR } from '../types/auth.types';

export const authReducer = (state, action) => {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true
            };
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED: 
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                isAuthenticated: true
            };
        case USER_LOAD_ERROR:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}