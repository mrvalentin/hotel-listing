import {
    RANDOM_TYPE
} from "./actionTypes";
import {Action} from './types';
  
export default function(state = {}, action:Action) {
    switch (action.type) {
      case RANDOM_TYPE:
        return { hotels: action.payload };
      default:
        return state;
    }
}