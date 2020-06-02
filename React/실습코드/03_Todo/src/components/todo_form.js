import React, {Component} from 'react';

class Todo_form extends Component {

    state = {
        name: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);

        this.setState({
            name: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        const css = {
            padding: '10px',
            margin: '0 auto',
            width: '500px'
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

        return (
            <div style={css}>
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.name}
                    placeholder="오늘의 To-Do는?"
                    onChange={this.handleChange} 
                    name='name'/> &nbsp;
                <button style={btnStyle}  type="submit">추가</button>

            </form>
            </div>
        );
    }
}

export default Todo_form;
