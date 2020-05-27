// importing React modules
import React from 'react';

// importing components
import Search from "../../components/Search/Search.component"
//  imports related to redux

// importing stylesheet
import "./Home.Page.styles.scss"

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <div className="content-box">
                <h1><i className="fab fa-github fa-1x"></i> GitHub-Statistics</h1>
                <h4>An open-source GitHub contribution analyzer</h4>
                <Search />
            </div>
        </div>
    )
}

export default HomePage