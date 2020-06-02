import { combineReducers } from 'redux';
import BlogReducer from './reducer_blog';


// 만들었던 reducer파일을 추가함
const rootReducer = combineReducers({
    blog: BlogReducer
});

export default rootReducer;
