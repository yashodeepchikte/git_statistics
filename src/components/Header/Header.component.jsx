// importing React modules
// import React from 'react';
import React from "react"
// @ts-ignore
import axios from "axios"
// tslint:disable-next-line:no-unused-variable
import { thistype } from "./Header.component"

// importing components
import { ReactComponent as Logo } from "./logo.svg"
import Search from "../Search/Search.component"

//  imports related to redux

// importing stylesheet
import "./Header.dark.style.scss"


const Header = (props) => {
    return (
        <div className="header">

            <nav>
                <a href="/" > <Logo style={{ backgroundColor: "white", height: "50px", width: "50px" }} /></a>
                <a href="/">GitHub-Statistics</a>

            </nav>

        </div>
    )
}


export default Header