import {
    GET_HOTELS
} from "./actionTypes";
import {Action} from './types'
  
export default function(state = {}, action: Action) {
    switch (action.type) {
      case GET_HOTELS:
        return { hotels: action.payload };
      default:
        return state;
    }
}