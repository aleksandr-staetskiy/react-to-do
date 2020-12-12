import React from 'react'
import Todo from "./Todo";

const TodoList = ({ todo, setTodo }) => {
    return(
        <ul className="todo-list">
            { todo.map( item => (
                <Todo
                    todos={todo}
                    todo={item}
                    key={item.id}
                    setTodo={setTodo}
                />
            )) }
        </ul>
    )
}

export default TodoList