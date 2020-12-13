import React from 'react'
import Todo from "./Todo";

const TodoList = ({ todo, setTodo, filteredTodos }) => {
    return(
        <ul className="todo-list">
            { filteredTodos.length ? filteredTodos.map( item => (
                <Todo
                    todos={todo}
                    todo={item}
                    key={item.id}
                    setTodo={setTodo}
                />
            )) : <h3>Todo list is empty</h3> }
        </ul>
    )
}

export default TodoList