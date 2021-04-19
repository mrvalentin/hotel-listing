import logo from './logo.svg';
import './App.css';
import {Card} from './components/index';
import HotelListing from "./containers/Hotels/HotelListing";
import { Provider } from 'react-redux';
import store from '../src/utils/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HotelListing/>
      </Provider>
    </div>
  );
}

export default App;
