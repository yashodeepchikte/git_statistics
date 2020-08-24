// importing React modules
import React from 'react';
import { Link } from "react-router-dom"

const AvtivityItem = ({ image_url, text, endpoint, repoName, payload }) => {
    console.log("nemaes = ", repoName)
    endpoint = "https://github.com/" + repoName
    return (
        <Link href={payload }>
            <div className="activityItem">
                <div className="activity-avatar">
                    <img src={image_url}  alt="dropdown list item"/>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
            </div>
        </Link>
    )
}

export default AvtivityItem