import { useState } from 'react'
import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const App = () => {
    const [textInput, useTextInput] = useState('')
    const [todo, setTodo] = useState('')

  return (
      <div className="wrapper">
          <Form textInput={textInput} useTextInput={useTextInput} />
          <TodoList />
      </div>
  );
}

export default App;
