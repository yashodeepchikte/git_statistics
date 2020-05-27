// importing libraries
import { combineReducers } from "redux";

// importing reducers
import UserReducer from "./User/user.reducer";
import LoadingReducer from './Loading/LoadingReducer';
import SearchingReducer from "./Searching/searching.reducer"

const RootReducer = combineReducers({
    user: UserReducer,
    loading: LoadingReducer,
    searching: SearchingReducer
});

export default RootReducer