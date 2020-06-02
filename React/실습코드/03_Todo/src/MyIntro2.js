import React, { Component } from 'react';

const MyIntro2 = ({card}) => {
    const css = {
        color: 'chocolate',
        fontSize : '50px'
    };
    return (
        <div style={css}>
                안녕하세요, 제 이름은 <b>{card.name}</b> 입니다. <br>
                </br>
                제 이메일은 <b>{card.email}</b>이며<br></br>
                제 전화번호는 <b>{card.phone}</b>입니다.<br></br>
                
        </div>
    )
}

export default MyIntro2;