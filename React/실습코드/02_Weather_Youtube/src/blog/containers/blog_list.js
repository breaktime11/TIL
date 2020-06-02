import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

// 날씨 데이터를 가져왔을경우, 날씨 데이터 풀어서 알기 쉬운형태로 보여주는 것
class BlogList extends Component {
  renderWeather(cityData){

    console.log("-----------");
    console.log(cityData);
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {/* loop실행 */}
          {/* {this.props.weather.map(val => this.renderWeather(val))} */}
          {this.props.weather.map(this.renderWeather)}
          
        </tbody>
      </table>
    );
  }
}

// mapStateToProps funciton
// 날씨 상태값을 저장하기 위한 함수
function mapStateToProps(state){
  return {weather : state.weather};
}

// connect mapping
export default connect(mapStateToProps)(BlogList);