import React from 'react';
import TodoItem from './TodoItem';
/**
 * todos : todo 목록 
 * onToggle : 체크박스 on/off 이벤트 
 * onRemove : todo 삭제 이벤트
 */
class TodoItemList extends React.Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, isChecked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    isChecked={isChecked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;