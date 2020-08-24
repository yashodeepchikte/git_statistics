import React, {useContext}  from "react"


//  Importing Components
import GihubLink from "../components/GithubLink.component"
import Search from "../components/Search.component"



const HomePage = () => {
    

    return(
        <div className='landing-page d-flex  justify-content-center '>
            <GihubLink color="#caa981"/>
            <div className='git-wrapper'>
            {/* The Github Button Class comes from the buttons.github.io/buttons.js library */}
				<a className='github-button' href={process.env.REACT_APP_GITHUB_URL}  data-icon='octicon-star' data-show-count='true' aria-label='Star yashodeepChikte/git_statistics on GitHub'>
					Star
				</a>
				<a className='github-button' href={process.env.REACT_APP_GITHUB_URL} data-icon='octicon-repo-forked' data-show-count='true' aria-label='Fork yashodeepChikte/git_statistics on GitHub'>
					Fork
				</a>
				<a className='github-button' href={process.env.REACT_APP_GITHUB_URL} data-icon='octicon-eye' data-show-count='true' aria-label='Watch yashodeepChikte/git_statistics on GitHub'>
					Watch
				</a>
			</div>

            <div className='content-area m-auto '>
				<h1 >Git-Statistics</h1>
				<p >An open-source GitHub contribution analyzer </p>
				<div className='search-container position-relative'>
					<Search />
				</div>
			</div>
        </div>
    )
}

export default HomePage