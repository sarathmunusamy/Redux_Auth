import axios from 'axios';
import { browserHistory } from 'react-router';

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './actionType';

const root_URL = 'http://localhost:3010';

export function signInAction({ email, password }) {

    return function (dispatch) {

        axios.post(`${root_URL}/signin`, { email, password })
            .then(response => {
                // Set authentication is true
                dispatch({ type: AUTH_USER });

                // Forward to features router
                browserHistory.push('/features');

                console.log("token....", response.data);
                //store the JWT token in order for subsequal request.

                localStorage.setItem('token', response.data.token);
            })
            .catch((error) => { console.log("errorrrrrrrrrrrrrr", error) })
    }

}
export function signUpAction({ email, password }) {
    return function (dispatch) {

        axios.post(`${root_URL}/signup`, { email, password })
            .then(response => {

                // Set authentication is true
                dispatch({ type: AUTH_USER });

                // Forward to features router
                browserHistory.push('/features');

                //store the JWT token in order for subsequal request.
                localStorage.setItem('token', response.data.token);

            })
            .catch(error => {
                console.log("error....", error);
            })

    }
}

export function signOut() {
    return function (dispatch) {
        localStorage.removeItem('token');
        dispatch({ type: UNAUTH_USER });
    }

}