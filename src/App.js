import { useState } from 'react'
import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
    const [textInput, setTextInput] = useState('')
    const [todo, setTodo] = useState([])

  return (
      <div className="wrapper">
          <Form
              textInput={textInput}
              setTextInput={setTextInput}
              setTodo={setTodo}
              todo={todo}
          />
          <TodoList
              todo={todo}
              setTodo={setTodo}
          />
      </div>
  );
}

export default App;
