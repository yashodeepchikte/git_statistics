import React, {useState, useEffect}  from "react"
import {  useParams} from "react-router-dom"

// import Spinner from "../components/Spinner/Spinner"
import BasicInformation from "../components/UserInformation"
import UserActivity from "../components/UserActivity"
import UserRepositories from "../components/UserRepositires"

export default (props) => {

    const paramaters = useParams()

    const  userName = paramaters.userHandel


    return(
        <div className="app-container">
            <h1>
                Header
            </h1>

            <div className="info-section">
                <BasicInformation userName={userName}/>
            </div>
            <div className="activity">
                <UserActivity userName={userName} />
            </div>

        </div>
    )
}