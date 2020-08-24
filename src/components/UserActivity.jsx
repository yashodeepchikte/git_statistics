import React from "react"


import useFetchData from "./../hooks/useFetchData"

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
let events = evenstData.data.map(event => {
    let type = event.type.replace("Event", "")
    let actor = event.actor.login
    let repo = event.repo.name
    if(type=="Push"|| type=="push" || type=="pushed" || type=="Pushed"){
        return actor+" "+"pushed"+" to "+repo
    }else if(type=="Watch" || type=="watch" || type=="watched" || type=="Watched"){
        return actor + " started watching " + repo
    }else if(type=="Star" || type=="starred" || type=="Starred" || type=="star"){
        return actor+" added a star to "+repo
    }
    else{
        return actor+" " + type+ " "+repo
    }
})
console.log("events =====----==== ", events)
return(
    <div>
 
    </div>
)

}

export default UserActivity
