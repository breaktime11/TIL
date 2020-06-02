import { FETCH_COIN } from "../actions";

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_COIN:
            // (X) return state.push(action.payload.data);
            // (OLD) return state.concat(action.payload.data);

                    // 날씨 데이터      // 기존 데이터 누적
            // console.log("___________________");
            // console.log(action.payload);
            return [ {
                    'data': action.payload.data,
                    'coin': action.coin_name
             }, ...state ]
        default:
            return state;
    }
}