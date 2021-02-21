import { createStore } from "redux";
import rootReducers from "./reducer";

export default createStore(
  rootReducers,
  window.devToolsExtension && window.devToolsExtension()
);
