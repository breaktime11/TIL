import axios from 'axios';

export const FETCH_COIN = 'FETCH_COIN';

const ROOT_URL = `https://poloniex.com/public?command=returnChartData`;


let today =+ new Date();
let weekBefore = new Date();
weekBefore.setDate(weekBefore.getDate() -7);
weekBefore.setHours(9,0,0);
weekBefore = weekBefore.getTime()/1000;


export async function fetchCoin(name) {
    const url = `${ROOT_URL}&currencyPair=${name}&start=${weekBefore}&end=${today}&period=86400`;
    const request = await axios.get(url);
   
    return {
        type: FETCH_COIN,
        payload: request,
        coin_name: name
    }
}

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