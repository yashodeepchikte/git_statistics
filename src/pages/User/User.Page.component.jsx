// importing React modules
import React from 'react';

// importing components

//  imports related to redux
import { connect } from "react-redux"
import { setUserHandel, setCurrentUser } from "../../redux/User/user.actions"


// importing stylesheet
import "./User.Page.styles.scss"

const UserPage = ({ match, foundUsers, setUserHandel, setCurrentUser, currentUser }) => {
    const userHandel = match.params.userHandel
    setUserHandel(userHandel)
    const [user] = foundUsers.filter(user => user.login === userHandel)
    setCurrentUser(user)
    console.log("current user = ", currentUser)
    return (
        <div className="UserPage">
            <div className="container">
                <h1>Userpage</h1>
                <h1>{currentUser.login} = Currentuser</h1>
                <p>Search components</p>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return (
        {
            foundUsers: state.searching.foundUsers,
            currentUser: state.user.currentUser
        }
    )
}
const mapDispatchToProps = dispatch => {
    return ({
        setUserHandel: userHandel => dispatch(setUserHandel(userHandel)),
        setCurrentUser: user => dispatch(setCurrentUser(user))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)