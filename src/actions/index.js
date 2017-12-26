import axios from 'axios';
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

                //store the JWT token in order for subsequal request.

            })
            .catch((error) => { console.log(error) })
    }

}