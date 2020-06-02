import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCoin } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState ({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    //submit의 default 전송 기능은 막아둠
    event.preventDefault();

    // fetchCoin에 data전달하고 원래 term은 초기화하기
    this.props.fetchCoin(this.state.term);
    this.props.handleName(this.state.term);

    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="암호화폐 종류를 입력해주세요"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">전송</button>
        </span>
      </form>
    );
  }
}

// mapDispatchToProps function
function mapDispatchToProps(dispatch) {
  //action과 props 연결
  return bindActionCreators({fetchCoin}, dispatch);
}

// connect mapping (만들고자 하는 기능의 함수) (Component의 이름)
// 첫번째 매개변수가 원래 mapStatetoProps인데 없으니까 필요 없으니 전달 X
// mapDispatchToProps는 actions과 props 연결 위해 전달
export default connect(null, mapDispatchToProps)(SearchBar);