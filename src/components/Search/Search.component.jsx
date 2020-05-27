// importing React modules
import React from 'react';
import axios from "axios"
// importing components
import Dropdown from "../DropdownList/Dropdown.component"
//  imports related to redux
import { connect } from "react-redux"

// importing actions for redux
import { changeSearchHandel } from "../../redux/Searching/Searching.actions"
// import { searchUsers } from "../../redux/Searching/Searching.actions"
import { setSearchUsers } from "../../redux/Searching/Searching.actions"


// importing stylesheet
import "./Search.style.scss"

const Search = (props) => {

    const { setSearchHandel, searchHandel, setSearchUsers, foundUsers } = props
    const handelChange = (event) => {
        setSearchHandel(event.target.value)
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        console.log("before search = ", searchHandel)
        try {
            axios.get(`https://api.github.com/search/users?q=${searchHandel}&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res => { console.log("res.data.items= ", res.data.items); setSearchUsers(res.data.items) })
                .catch(err => alert(err.message));
        } catch (err) {
            alert(err.message)
        }

    }
    return (
        <div className="search">
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="search GitHub user" value={searchHandel} onChange={handelChange} name="searchHandel" />
            </form>
            <Dropdown foundUsers={foundUsers} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userHandel: state.user.userHandel,
        searchHandel: state.searching.searchHandel,
        foundUsers: state.searching.foundUsers
        // foundUsers: state.srarch.foundUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchHandel: searchHandel => dispatch(changeSearchHandel(searchHandel)),
        // searchUsers: searchHandel => dispatch(searchUsers(searchHandel)),
        setSearchUsers: users => dispatch(setSearchUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)