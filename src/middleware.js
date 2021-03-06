import {applyMiddleware} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

export default composeWithDevTools(
    applyMiddleware(logger)
)
