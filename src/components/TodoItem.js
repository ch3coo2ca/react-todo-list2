import React from 'react';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                <span> text here </span> 
                <button> X </button>
            </div>
        );
    }
}

export default TodoItem;