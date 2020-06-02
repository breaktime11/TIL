import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBarWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {term : ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term : event.target.value
    });
  }

  onFormSubmit(event) {
    // submit의 전송기능 막음
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term : ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// action과 연결시켜 주기위한 함수
// mapDispatchToProps function
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);

}

// connect mapping
// 첫번째괄호는 만들고자 하는 기능의 함수, 두번째괄호는 컴포넌트 이름
// 첫번째 괄호의 첫번째 mapStateToProps이지만 현재 없으니까 null
// 두번째는 만들고자 하는 기능의 함수
export default connect(null, mapDispatchToProps)(SearchBarWeather);

