import React from 'react';
import './TodoListContainer.css';


//(props) => { ...} 를 비구조화 할당함 
//함수형 컴포넌트 
const TodoListContainer = ({ form, children }) => {
    return (
        <div className = "todo-list-container">
            <div className="title">
                To-Do List
            </div>

            <div className="form-wrapper">
                {form}
            </div>

            <div className="todo-wrapper">
                {children}
            </div>
        </div>
    );
}

export default TodoListContainer; 
 