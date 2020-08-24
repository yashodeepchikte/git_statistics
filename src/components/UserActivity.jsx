import React from "react"


import useFetchData from "./../hooks/useFetchData"
import ActivityItem from "../components/activityItemp"


const UserActivity = ({userName}) => {

let eventsEndpoint = "https://api.github.com/users/"+userName+"/events"
console.log("EVENTS  = ", eventsEndpoint)
const [evenstData, eventsLoading, eventsError] = useFetchData(eventsEndpoint)
if(eventsLoading){
    return "loading"
}
if(eventsError){
    return "Error"
}
console.log("EVENTS>DATA = ", evenstData.data)
let events = evenstData.data.map(event => {
    let type = event.type.replace("Event", "")
    let actor = event.actor.login
    let repo = event.repo.name
    if(type=="Push"|| type=="push" || type=="pushed" || type=="Pushed"){
        return {text:actor+" "+"pushed"+" to "+repo, avatar_url: event.actor.avatar_url, repo_url: event.repo.ur, repoName: event.repo.namem, payload: event.payload.url}
    }else if(type=="Watch" || type=="watch" || type=="watched" || type=="Watched"){
        return {text: actor + " started watching " + repo, avatar_url: event.actor.avatar_url, repo_url: event.repo.url, repoName: event.repo.name}
    }else if(type=="Star" || type=="starred" || type=="Starred" || type=="star"){
        return {text: actor+" added a star to "+repo, avatar_url: event.actor.avatar_url, repo_url: event.repo.url, repoName: event.repo.name}
    }
    else{
        return {text: actor+" " + type+ " "+repo, avatar_url: event.actor.avatar_url, repo_url: repo.url, repoName: event.repo.name}
    }
})
console.log("events =====----==== ", events)
return(
    <div>
            {events.map(event=> <ActivityItem image_url={event.avatar_url} endpoint={event.repo_url} text={event.text} repo_name={event.repoName} payload= {event.payload}/>)}
    </div>
)

}

export default UserActivity
