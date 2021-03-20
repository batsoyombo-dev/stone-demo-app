import { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/auth.reducer';
import { USER_LOADED, USER_LOADING, USER_LOAD_ERROR } from '../types/auth.types';

const initialState = {
    user: null,
    isLoading: false,
    isAuthenticated: false
};

// Authentication context
export const AuthContext = createContext(initialState);


export const getCookie = name => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const AuthContextProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer(authReducer, initialState);

    const handleLoginRequest = async userData => {
        dispatch({
            type: USER_LOADING
        });
        fetch("/api/user/login/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken")
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success)
                    dispatch({
                        type: USER_LOADED,
                        payload: data.user
                    });
                else
                    dispatch({
                        type: USER_LOAD_ERROR
                    })
            })
            .catch(e => {
                dispatch({
                    type: USER_LOAD_ERROR
                })
            })
    }

    const handleRegisterRequest = async userData => {
        console.log(userData);
        dispatch({
            type: USER_LOADING
        });
        fetch("/api/user/register/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie("csrftoken")
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success)
                    dispatch({
                        type: USER_LOADED,
                        payload: data.user
                    });
                else
                    dispatch({
                        type: USER_LOAD_ERROR
                    })
            })
            .catch(e => {
                dispatch({
                    type: USER_LOAD_ERROR
                })
            })
    }

    useEffect(() => {
        handleLoginRequest({});
    }, [])

    return (
        <AuthContext.Provider value={ { authState, handleLoginRequest, handleRegisterRequest } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider