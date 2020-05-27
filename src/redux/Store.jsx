// importing libraries
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"

// importing root reducer
import RootReducer from "./RootReducer"

const middlewares = [logger];

// if (process.env.NODE_ENV === "developement") {
//     middlewares.push(logger);
// }

// const store = createStore(RootReducer, applyMiddleware(...middlewares))
export const store = createStore(RootReducer, applyMiddleware(...middlewares));



export default { store };