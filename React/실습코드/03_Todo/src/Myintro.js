import React, { Component } from 'react';

class MyIntro extends Component {


    render() {
        const css = {
            color: 'purple',
            fontSize : '40px'
        };
        return (
            <div style={css}>
                안녕하세요, 제 이름은 <b>{this.props.card.name}</b> 입니다. <br>
                </br>
                제 이메일은 <b>{this.props.card.email}</b>이며
                제 전화번호는 <b>{this.props.card.phone}</b>입니다.<br></br>
                
            </div>
        );
    }
}
export default MyIntro;