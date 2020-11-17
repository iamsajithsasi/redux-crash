import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { combineReducers, createStore } from "redux";

function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload.state;
      break;
    default:
      return state;
  }
}
function productReducer(state = [], action) {
  return state;
}

const combinedReducers = combineReducers({
  user: userReducer,
  products: productReducer,
});

const store = new createStore(combinedReducers, {
  user: "sajith",
  products: [{ age: 24, sex: "Male" }],
});

const action = {
  type: "updateUser",
  payload: {
    state: "John",
  },
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
