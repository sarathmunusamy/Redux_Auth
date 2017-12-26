
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from '../actions/actionType';

const authDecision = (state = {}, Action) => {
 
    switch (Action.type) {
        case AUTH_USER:
            return { ...state, Authentication: true }
            break;

        default:
            break;
    }
    return state;
}

export default authDecision;