import axios from "axios"

export const findUsers = async (searchHandel) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${searchHandel}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    return res.data.items
}