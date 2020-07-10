//  importing react
import React from "react"
//  imports related to redux

//  imporitng the stylesheet
import "./Card.styles.scss"
// importing components

const Card = ({ currentUser }) => {
    return (
        <div className="card">
            <div className="avatar">
                <img src={currentUser.avatar_url} />
            </div>
            <div className="bio">
                {currentUser.login &&
                    <p><i className="fab fa-github fa-1x"></i>
                        <a href={currentUser.html_url}> {currentUser.login}</a>
                    </p>
                }

                {currentUser.email &&
                    (<p>
                        <i class="fa fa-envelope-o email" aria-hidden="true"></i>
                        <a>{}</a>
                    </p>)
                }


            </div>
            <div className="info">info</div>
        </div>
    )
}

export default Card 