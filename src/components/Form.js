import React from 'react'

const Form = ({ textInput, setTextInput, setTodo, todo }) => {

    const handleInput = (e) => {
        setTextInput(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault();
        setTodo(
            [
                ...todo,
                { text: textInput, completed: false, id: Math.random() }
            ]
        );
        setTextInput('');
    }

    return(
        <form>
            <input
                type="text"
                value={textInput}
                onChange={handleInput}
            />
            <button
                className="btn"
                type="submit"
                onClick={addTodo}
            >
                Add Todo
            </button>
            <select className="select">
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </form>
    )
}

export default Form