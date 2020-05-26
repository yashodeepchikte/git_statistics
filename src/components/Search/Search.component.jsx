// importing React modules
import React from 'react';

// importing components

//  imports related to redux

// importing stylesheet
import "./Search.style.scss"

const Search = (props) => {
    return (
        <div className="search">
            <form>
                <input type="text" placeholder="search GitHub user" />
            </form>
        </div>
    )
}

export default Search