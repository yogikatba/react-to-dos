import React,{useState} from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

const App = () => {
  const [state,setState] = useState({
    todos:
    [
      {id:1, content: 'go to gym'},
      {id:2, content: 'start studying'}
    ]
  }
  )
  const deleteTodo = (id) =>{
    const todos = state.todos.filter( todo => {
      return todo.id!==id;
    });
    setState({
      todos
    })
  }
  const addTodo=(todo)=>{
    todo.id=Math.random()
    const todos=[...state.todos,todo]
    setState({
      todos
    })
  }
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={state.todos} deleteTodo={deleteTodo}/>     
      <AddForm addTodo={addTodo}/>
    </div>
  );

}

export default App;
