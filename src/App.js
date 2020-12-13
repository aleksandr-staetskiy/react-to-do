import { useState, useEffect } from 'react'
import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
    const [textInput, setTextInput] = useState('')
    const [todo, setTodo] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    const filterTodoList = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todo.filter( item => item.completed === true ))
                break;
            case 'uncompleted':
                setFilteredTodos(todo.filter( item => item.completed === false ))
                break;
            default:
                setFilteredTodos(todo)
                break;
        }
    }

    useEffect(() => {
        filterTodoList();
    }, [status, todo])

  return (
      <div className="wrapper">
          <Form
              textInput={textInput}
              setTextInput={setTextInput}
              setTodo={setTodo}
              todo={todo}
              status={status}
              setStatus={setStatus}
          />
          <TodoList
              todo={todo}
              setTodo={setTodo}
              filteredTodos={filteredTodos}
          />
      </div>
  );
}

export default App;
