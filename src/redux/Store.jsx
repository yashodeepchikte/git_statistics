// importing libraries
import { createStore, applyMiddleware } from "react-redux"
import logger from "redux-logger"

// importing root reducer
import RootReducer from "./RootReducer"

const middlewares = [];

if (process.env.NODE_ENV === "developement") {
    middlewares.push(logger)
}

const store = createStore(RootReducer, applyMiddleware(...middlewares))


export default store;