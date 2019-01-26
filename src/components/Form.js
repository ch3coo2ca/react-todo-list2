import React from 'react';
import './Form.css';


/*
    value : text 
    onChange : text 내용 변경 됐을 때 
    onCreate : 버튼 클릭 
    onKeyPress : text에서 키 입력 했을 때 (enter)
*/
const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input
                value={value}
                onChange={onChange}
                onKeyPress={onkeypress} />

            <div
                className="button-create"
                onClick={onCreate}> 
                Add </div>
        </div>
    );
} 

export default Form; 
