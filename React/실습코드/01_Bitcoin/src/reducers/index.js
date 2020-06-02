import { combineReducers } from 'redux';
import CoinReducer from './reducer_weather';

// rootReducer에 새로운 reducer 추가
const rootReducer = combineReducers({
    coin: CoinReducer
});

export default rootReducer;
