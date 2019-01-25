import React  from 'react'; 
import TodoList from './TodoList'; 


export default class App extends React.Component {
    render() {
        return ( 
            <div> 
                <h1>To-Do List</h1> 
                <TodoList />
            </div>
        );
    }
}