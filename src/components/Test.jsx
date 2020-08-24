import React, {useState} from "react"
import axios from "axios"
const Test =  () => {
    const [state, setState] = useState()
    let res =    axios.get("https://api.github.com/users/yashodeepchikte/events")
    console.log("res = " , res)
    return(<div>"yashodeep"</div>)
}

export default Test