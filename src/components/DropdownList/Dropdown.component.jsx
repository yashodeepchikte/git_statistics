// importing React modules
import React, { Fragment } from 'react';

// importing components
import DropdownItem from "../DropdownItem/DropdownItem.component"
//  imports related to redux
import { connect } from "react-redux"

// importing stylesheet
import "./Dropdown.styles.scss"



const Dropdown = (props) => {
    const { foundUsers } = props

    if (foundUsers !== []) {
        // console.log("inside dropdown found=", foundUsers)
        return (
            <div className={`dropdown ${foundUsers === [] ? "hidden" : ""}`} >
                {foundUsers.map(user => <DropdownItem user={user} key={user.id} />)}
            </div>
        )
    } else {
        return (
            <Fragment ></Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userHandel: state.user.userHandel,
        searchHandel: state.searching.searchHandel,
        foundUsers: state.searching.foundUsers
        // foundUsers: state.srarch.foundUsers
    }
}

export default connect(mapStateToProps)(Dropdown)