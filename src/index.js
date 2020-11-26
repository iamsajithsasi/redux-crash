import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// must set initial state to reducer or it will error as uninitialized
function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload.state;
    default:
      return state;
  }
}
// must set initial state to reducer or it will error as uninitialized
function productReducer(state = [], action) {
  return state;
}

const combinedReducers = combineReducers({
  // usually reducer returns values, so we are assigning it to user, product respectively
  user: userReducer,
  products: productReducer,
});

const store = new createStore(
  // combine multiple reducers
  combinedReducers,
  // initial values
  {
    user: "sajith",
    products: [{ age: 24, sex: "Male" }],
  },
  // react dev tools extension
  window.devToolsExtension && window.devToolsExtension()
);

// const action = {
//   type: "updateUser",
//   payload: {
//     state: "John",
//   },
// };

// store.dispatch(action);

// console.log(store.getState());

export function actionNew(user) {
  return {
    type: "updateUser",
    payload: {
      state: user,
    },
  };
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App name="sample" />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
