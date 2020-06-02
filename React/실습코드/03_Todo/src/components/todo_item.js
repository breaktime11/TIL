import React, { Component } from 'react';

class Todo_item extends Component {
    state = {
        name: ''
    }

    handleRemove = (e) => {
        const { info, onRemove } = this.props;

        onRemove(info.id);  //부모의 Remove (List의 Remove) 호출
    }

    render() {
        const css = {
            border: '2px solid lightgrey',
            padding: '10px',
            margin: '7px',
            marginLeft: '100px',
            marginRight: '100px'
        };

       const btnStyle = {
           
            color: "white",
            background: "grey",
            padding: ".375rem .75rem",
            border: "1px solid grey",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            lineHeight: 1.4
          };

        const {name} = this.props.info;

        console.log({name});
       

            return(
                <div style={css}>
                    <div><b>{name}</b></div>
                    <button style={btnStyle} onClick={this.handleRemove}>삭제</button>
                </div>
            );
    }
}

export default Todo_item;