import { combineReducers } from 'redux';
import hotelReducer from '../containers/Hotels/reducers';

export default combineReducers({
  hotels: hotelReducer
})