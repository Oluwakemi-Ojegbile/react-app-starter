import { createStore, applyMiddleware } from "redux";
import rootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [thunk];

if (process.env.NODE_ENV === "develop") {
  middleware.push(logger);
}

const Store = createStore(rootReducer, applyMiddleware(...middleware));

export default Store;
