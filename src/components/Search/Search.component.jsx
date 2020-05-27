// importing React modules
import React from 'react';
import axios from "axios"
// importing components
import Dropdown from "../DropdownList/Dropdown.component"
//  imports related to redux
import { connect } from "react-redux"

// importing actions for redux
import { setSearchHandel, setFoundUsers } from "../../redux/Searching/Searching.actions"

// importing stylesheet
import "./Search.style.scss"

const Search = (props) => {

    const { searchHandel, foundUsers, setSearchHandel, setFoundUsers } = props
    const handelChange = (event) => {
        setSearchHandel(event.target.value)
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        try {
            axios.get(`https://api.github.com/search/users?q=${searchHandel}&
                            client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
                .then(res => { setFoundUsers(res.data.items) })
                .catch(err => alert(err.message));
        } catch (err) {
            alert(err.message)
        }

    }
    return (
        <div className="search">
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="search GitHub user" value={searchHandel} onChange={handelChange} name="searchHandel" autoComplete="off" />
            </form>
            <Dropdown foundUsers={foundUsers} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchHandel: state.searching.searchHandel,
        foundUsers: state.searching.foundUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchHandel: searchHandel => dispatch(setSearchHandel(searchHandel)),
        setFoundUsers: users => dispatch(setFoundUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)