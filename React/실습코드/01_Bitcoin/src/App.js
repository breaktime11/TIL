import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';
import CoinList from './containers/weather_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin_name: '',
    }
  }

  handleName = (data) => {
    const {coin_name} = this.state;
    
    this.setState ({
      coin_name: data,
    })
  }

  render() {

    return (
      <div>
        <SearchBar 
          handleName = {this.handleName}/>

        <div>
          USDC_ETH / USDC_BTC / BTC_XRP
        </div>
        <CoinList 
          coin_name={this.state.coin_name}/>
      </div>
    );
  }
}
