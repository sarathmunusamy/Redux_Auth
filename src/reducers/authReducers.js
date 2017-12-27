
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from '../actions/actionType';

export default function (state = {}, Action) {

    switch (Action.type) {
        case AUTH_USER:
            return { ...state, authentication: true }
            break;
        case UNAUTH_USER:
            return { ...state, authentication: false }
            break;
        default:
            break;
    }
    return state;
}

