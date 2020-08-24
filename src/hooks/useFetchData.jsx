import {useState, useEffect, useCallback} from "react"
import axios from "axios"


const useFetchData = (endpoint) => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false) 
    console.log("Endpoint send to sue data fetch = ", endpoint)
    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)
 
        try {
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
    }, [endpoint])

    useEffect( () => {
        // if(localStorage["github-users-"+userName] ){
        //     console.log("grabbing users from local storage")
        //     setState(JSON.parse(localStorage["github-users"]))
        //     setLoading(false)
        // }else{
            console.log("making an api req for getting the feed")
            fetchData()
        // }
    }, [fetchData, endpoint])  

    useEffect(
        () => {
            localStorage.setItem(endpoint,  JSON.stringify(state))
        },
        [endpoint, state]
    )
    return [state, loading, error]

}

export default useFetchData