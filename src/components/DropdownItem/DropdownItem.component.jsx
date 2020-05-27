// importing React modules
import React, { Fragment } from 'react';

// importing components

//  imports related to redux

// importing stylesheet
import "./DropdownItem.style.scss"


const DropdownItem = ({ user }) => {
    return (
        <div className="DropdownItem">
            <span className="avatar">
                <img src={user.avatar_url} />
            </span>
            <span className="name">
                <h1>{user.login}</h1>
            </span>
        </div>
    )
}

export default DropdownItem