// importing React modules
import React from 'react';
import { Link } from "react-router-dom"

const DropdownItem = ({ user }) => {
    return (
        <Link to={`/user/${user.login}`}>
            <div className="DropdownItem">
                <div className="avatar">
                    <img src={user.avatar_url}  alt="dropdown list item"/>
                </div>
                <div className="name">
                    <h4>{user.login}</h4>
                </div>
            </div>
        </Link>
    )
}

export default DropdownItem