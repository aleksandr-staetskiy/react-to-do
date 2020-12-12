import React from 'react'

const Todo = ({ todo, setTodo, todos }) => {

    const deleteHandler = () => {
        setTodo(
            todos.filter( item => item.id !== todo.id )
        )
    }

    const completedHandler = () => {
        setTodo(
            todos.map( item => {
                console.log(item)
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item
            })
        )
    }

    return(
        <li className={`todo ${ todo.completed ? 'completed' : '' }`}>
            <span>{todo.text}</span>
            <button onClick={completedHandler}>+</button>
            <button onClick={deleteHandler}>x</button>
        </li>
    )
}

export default Todo