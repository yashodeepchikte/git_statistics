// importing React modules
import React from 'react';
import { Link } from "react-router-dom"

// importing components

//  imports related to redux

// importing stylesheet
import "./DropdownItem.style.scss"


const DropdownItem = ({ user }) => {
    return (
        <Link to={`/user/${user.login}`}>
            <div className="DropdownItem">
                <div className="avatar">
                    <img src={user.avatar_url} />
                </div>
                <div className="name">
                    <h1>{user.login}</h1>
                </div>
            </div>
        </Link>
    )
}

export default DropdownItem