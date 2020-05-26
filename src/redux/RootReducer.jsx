// importing libraries
import { combineReducers } from "redux"

// importing reducers
import UserReducer from "./User/user.reducer"


const RootReducer = combineReducers({
    user: UserReducer
})