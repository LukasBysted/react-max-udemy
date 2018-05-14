import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
    return(
        <div className="UserInput">
            <input className="InputField" type="text" onChange={props.changed}/>
        </div>
    )
}

export default UserInput;