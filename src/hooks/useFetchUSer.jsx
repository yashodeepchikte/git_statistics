import {useState, useEffect, useCallback} from "react"
import axios from "axios"


const useFetchUser = (userName) => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false) 
    console.log("USERNAME PADDED IN WAS = ", userName)
    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)
 
        try {
            const endpoint = `https://api.github.com/search/users?q=${userName}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            console.log("ENDPOINT =  ", endpoint)
            const result = await axios.get(endpoint)
            console.log("resilt in useFetchUsers = ", result)
            setState({
                ...result
            })

        } catch (error) {
            console.error(error.message)
            setError(true)
        }
        setLoading(false)
    }, [userName])

    useEffect( () => {
        // if(localStorage["github-users-"+userName] ){
        //     console.log("grabbing users from local storage")
        //     setState(JSON.parse(localStorage["github-users"]))
        //     setLoading(false)
        // }else{
            console.log("making an api req for getting the feed")
            fetchData()
        // }
    }, [fetchData, userName])  

    useEffect(
        () => {
            localStorage.setItem("github-users-"+userName,  JSON.stringify(state))
        },
        [userName, state]
    )
    return [state, loading, error]

}

export default useFetchUser