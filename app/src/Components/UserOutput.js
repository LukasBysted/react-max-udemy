import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>This is a UserOutput element. It can show a username: <b>{props.username}</b></p>
            <p>Edit the username in the text field below</p>
        </div>
    )
}

export default UserOutput;