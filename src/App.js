import React from 'react';
import TodoListContainer from './components/TodoListContainer.js';
import Form from './components/Form.js';
import TodoItemList from './components/TodoItemList.js';

class App extends React.Component {
    id = 3

    state = {
        input: '',
        todos: [
            { id: 0, text: 'react', isChecked: false },
            { id: 1, text: 'react', isChecked: true },
            { id: 2, text: 'react', isChecked: false }
        ]
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            // id 값 증가 후 todos 배열에 추가
            todos: todos.concat({
                id: this.id++,
                text: input,
                isChecked: false
            })
        });

        console.log(todos);
    }


    handleKeyPress = (e) => {
        if (e.key === 'Enter') { //엔터 키 이벤트 
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;
        const selected = todos[id];

        const newTodos = [...todos];
        newTodos[id] = {
            ...selected,
            isChecked: !selected.isChecked
        };

        this.setState({
            todos: newTodos
        });
    }


    handleRemove = (id) => {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        const { input, todos } = this.state;

        //this.handleChange 에서 this 생략 가능 
        // 비구조화 할당
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;

        return (
            <TodoListContainer form={(<Form
                value={input}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onCreate={handleCreate} />
            )}>

                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove} />
            </TodoListContainer>
        );
    }
}


export default App;