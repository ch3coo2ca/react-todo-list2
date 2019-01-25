import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';


const TodoList = () => {
    return (
        <div>
            <TodoInput />

            <ul>
                <TodoItem />
            </ul>

        </div>

    );
}

export default TodoList;