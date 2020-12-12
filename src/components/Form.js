import React from 'react'

const Form = ({ textInput, useTextInput }) => {

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    return(
        <form>
            <input
                type="text"
                onChange={handleInput}
            />
            <button type="submit"></button>
        </form>
    )
}

export default Form