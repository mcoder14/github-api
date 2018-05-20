 import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { user, repos } from "./reducers/searchReducer";

const env = process.env.NODE_ENV;

const middlewares = [
    thunk,
    promise()
];

if(env !== 'test') {
    middlewares.push(createLogger());
}

export default createStore(
    combineReducers({
        user,
        repos
    }),
    {},
    applyMiddleware(...middlewares)
);