import React from 'react'
import PropTypes from 'prop-types';

const Todo = ({ todo, setTodo, todos }) => {

    const deleteHandler = () => {
        setTodo(
            todos.filter( item => item.id !== todo.id )
        )
    }

    const completedHandler = () => {
        setTodo(
            todos.map( item => {
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

Todo.propTypes = {
    todos: PropTypes.array,
    todo: PropTypes.object.isRequired,
}

export default Todo