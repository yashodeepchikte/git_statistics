import React, {useState, useEffect}  from "react"
import {  useParams} from "react-router-dom"
import useFetchUser from "../hooks/useFetchUSer"

// import Spinner from "../components/Spinner/Spinner"

export default (props) => {

    const paramaters = useParams()

    const  userName = paramaters.userHandel

    const [data, loading, error] = useFetchUser(userName)
    if(loading){
        return "LOADING"
    }
    if(error){
        return <h1> ther is some error</h1>
    }
    let user = data.data.items.filter(user => user.login == userName)
    console.log("User ----------------------> ", user)
    return(
        <div className="container">
            <h1>
                Header
            </h1>

            <h1>
                INFORMATION
            </h1>

        </div>
    )
}