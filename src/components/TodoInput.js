import React from 'react';


class TodoInput extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            text: ''
        }; 

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)  {
        this.setState({
            text: e.target.value
        });

        console.log(e.target.value);
    }


    render() {
        return (
            <input
                type="text"
                placeholder="Add a to-do . . ." 
                onChange ={this.handleChange}/>
        );

    }
}

export default TodoInput;