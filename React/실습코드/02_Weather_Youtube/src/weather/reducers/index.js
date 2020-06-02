import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


// 만들었던 reducer파일을 추가함
const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
