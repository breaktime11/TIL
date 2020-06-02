import {FETCH_WEATHER} from "../actions";

// biz logic
// action.type(FETCH_WEATHER), action.payload(data = weather)
export default function(state = [], action) {
    switch(action.type){
        case FETCH_WEATHER:
            // (x) return state.push(action.payload.data); => 원래는 이렇게 사용 (js에서)
            // (old) return state.concat(action.payload.data); => react에서 사용
            
            // [SEOUL, TOKYO, NEWYORK, SEATTLE]
            // [SEOUL, [TOKYO, NEWYORK, SEATTLE]]
            // data라는 값에 들어가 있기 때문! => 기존 데이터에 누적해서 반환
            // reducer폴더의 index에서 불러서 씀
            return [action.payload.data, ...state]
        default:
            return state;
    }
}