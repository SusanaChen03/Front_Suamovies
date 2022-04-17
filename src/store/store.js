import { createStore } from "redux";
import { HIDDEN_POPUP, USER_LOGGED, SHOW_POPUP,USER_LOGOUT} from "./types";

const initialState = {
    logged:false,
    popup: { visibility: false, text: "" }
};


const reductor = (state = initialState, action) => {
    if (action.type === USER_LOGGED) {
        return {
            ... state,
            logged: true
        };
    }

    if (action.type === USER_LOGOUT) {
        return {
            ...state,
            logged: false
        }
    }

    if (action.type === SHOW_POPUP) {
        return {
          ...state,
          popup: { visibility: true, text: action.payload }
        };
      }
    
    if (action.type === HIDDEN_POPUP) {
        return {
          ...state,
          popup: { visibility: false }
        };
    }
    return state;
};


export default createStore(reductor);