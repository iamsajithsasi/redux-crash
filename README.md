# Getting Started with Create React App

# level-1:
create a store:- const store = new createStore(reducer);
create a reducer:- function reducer() { return "state"}
get the state by using:- store.getState();

# level-2:
create a action:- const action = { type: "newAction", payload: {state: "New State"}}
connect action to redux:- store.dispatch(action)
using switch case to initiate action:- switch(action.type) {case "newAction": return action.payload.state; break; default: return state}

// output of above
import { createStore } from "redux";
function reducer(state, action) {
  switch (action.type) {
    case "sampleAction":
      return action.payload.state;
    default:
      return state;
  }
}
const store = new createStore(reducer);
const action = {
  type: "sampleAction",
  payload: {
    state: "New State",
  },
};
store.dispatch(action);
console.log(store.getState());


# level-3:
combine multiple reducers:
Adding window redux devtools in the store:

// output of above
import { combineReducers, createStore } from "redux";
function userReducer(state = "", action) {
  switch (action.type) {
    case "updateUser":
      return action.payload.state;
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
const store = new createStore(
  combinedReducers, 
  {
    user: "sajith",
    products: [{ age: 24, sex: "Male" }],
  },
  window.devToolsExtension && window.devToolsExtension()
);
const action = {
  type: "updateUser",
  payload: {
    state: "John",
  },
};
store.dispatch(action);
console.log(store.getState());

# level-4:
Access store using provider

// output of above