import React, { Component } from 'react';

const ErrorObject = () => {
    throw (new Error('에러 발생쓰'));       
}

class Counter extends Component {
    state = {
        count: 0,
        error: false,
        info: {
            name: 'React',
            age: 10
        }
        
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log(error);
    }


    handleIncrease = () => { 
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            count:  this.state.count - 1
        });
    }

    handleChangeinfo = () => {
        // 1. this.state.info의 name을 변경
        this.setState({
            info: {
                name: 'Changed'
            }
        });

        // 2. this.state.info의 name을 변경 (전개 연산자)
        this.setState({
            info: {
                ...this.state.info,
                name: '2_Changed'
                
            }
        });
    }

    render() {
        if (this.state.error) return (<h1>에러가 발생되었심덩.</h1>)

        return (
            <div>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>

                {this.state.count == 3 && <ErrorObject />}

                <button onClick={this.handleIncrease}>+ </button> &nbsp;
                <button onClick={this.handleDecrease}>- </button> &nbsp;
                <button onClick={this.handleChangeinfo}>Changeinfo</button>
                <br></br>
                <h1>{this.state.info.name}/{this.state.info.age}</h1>
            </div>
        );
    }
}

export default Counter;