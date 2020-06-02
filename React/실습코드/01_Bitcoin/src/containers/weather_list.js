import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';



class CoinList extends Component {
  constructor(props) {
    super(props);
    this.renderCoin = this.renderCoin.bind(this);
  }
  renderCoin(coinData) {
    console.log('Data', coinData.data);

    let name = coinData.coin;

    let Average = [];
    let weekBefore = convertDate(coinData.data[0].date);
    let today = convertDate(coinData.data[7].date);
    

    for (let i = 0; i < coinData.data.length; i++) {
      Average.push(coinData.data[i].weightedAverage);
    }


    return (
      
      <tr>
        <td width="10">{name}</td>
        <td width="50">{weekBefore} ~ {today}</td>
        <td width="80"><Chart data={Average} color="orange"/></td>
      </tr>
    );
  }
  render() {
    console.log("-----" + this.props.coin_name);
    return (
      
      <table className="table table=hover">
        <thead>
          <tr>
            <th>코인</th>
            <th>기간</th>
            <th>평균 추이</th>
          </tr>
        </thead>
        <tbody>
          {this.props.coin.map(this.renderCoin)}
        </tbody>
      </table>
    );
  }
}

function convertDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let y = date.getFullYear() ;
  let m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  
  return y+"-"+m+"-"+d;
}

// mapSrtateToProps funciton
function mapStateToProps(state) {
  return { coin: state.coin };
}

// connect mapping
export default connect(mapStateToProps)(CoinList)