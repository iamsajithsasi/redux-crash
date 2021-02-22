import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducer";

import thunk from "redux-thunk";

export default createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
