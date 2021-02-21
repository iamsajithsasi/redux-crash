import { combineReducers } from "redux";

const initialState = {
  user: "User",
  todos: [],
};

const someReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return state;
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({ states: someReducers });

export default rootReducers;
