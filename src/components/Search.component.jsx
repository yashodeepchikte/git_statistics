// importing React modules
import React from 'react';
import {useRef, useState} from 'react'
import axios from "axios"


//  Importing Componets
import Dropdown from "./Dropdown.component"

const Search = (props) => {

    const [searchHandel, setSearchHandel] = useState("")
    const [foundUsers, setFoundUsers] = useState([])

    const timeOut = useRef(null);
    
    const handelChange = (event) => {
        clearTimeout(timeOut.current)
        console.clear()
        
        var newValue = event.target.value
        setSearchHandel(newValue)

        if (newValue !=""){
            timeOut.current = setTimeout(() => handelSubmit(newValue), 500)
            console.log("newValue = ", newValue)
        }else{
            console.log("The search handel is empty")
        }



    } 

    const handelSubmit = (event) => {
        var handel 
        if(event.target){
            handel = event.target.value
            event.preventDefault()
        }
        else{
            handel = event
        }



        try {
            axios.get(`https://api.github.com/search/users?q=${ handel }&
                            client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
                            client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
                .then(res => { 
                    console.log("Found users = ", foundUsers)
                    return setFoundUsers(res.data.items) 
                })
                .catch(err => console.log(err.message));
        } catch (err) {
            console.log(err.message)
        }
    }


    
    
    return (
        <>
            <input type="text" placeholder="search GitHub user" value={ searchHandel } onChange={handelChange} name="searchHandel" autoComplete="off" />
            {/* {searchHandel&&<Dropdown foundUsers={foundUsers}/>} */}
            {<Dropdown foundUsers={foundUsers}/>}
        </>
    )

}

export default Search