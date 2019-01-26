import React from 'react';
import './TodoItem.css';

/**
 * text : todo 내용 
 * isChecked : 체크박스 상태 
 * id : todo ID 
 * onToggle : 체크박스 토글 이벤트 
 * onRemove : todo 삭제 이벤트
 */

class TodoItem extends React.Component {
    render() {
        const { text, isChecked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    //이벤트의 확산을 막아줌
                    //삭제 이벤트가 해당 부모의 이벤트까지 전달되지 않음 
                    // onToggle 실행 X 
                    e.stopPropagation();
                    onRemove(id)
                }}> &times;
                </div>

                <div className={`todo-text${isChecked && 'checked'}`}>
                    <div>{text}</div>
                </div>

                {
                    isChecked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;