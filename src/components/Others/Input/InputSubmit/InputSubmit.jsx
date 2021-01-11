import React from 'react'
import './InputSubmit.css'

const InputSubmit = ({ handleClick, disabled, name }) => {
    return (
        <div>
            <input type="submit" name={name} onClick={handleClick} disabled={disabled} />
        </div>
    )
}

export default InputSubmit
