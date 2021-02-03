import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { actionNew } from "./index.js";
import { bindActionCreators } from "redux";

function App(props) {
  const { products, users } = props;

  const updateUserFn = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => props.updateUser(json.title));
  };

export default function App() {
  return (
    <div>
      <header>Redux Crash</header>
      <button onClick={updateUserFn}>Click</button>
      <p>{users}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  users: state.user,
});

// single action
// const mapActionsToProps = {
//   updateUser: actionNew,
// };

const mapDispatchToProps = {
  updateUser: actionNew,
};

// multiple actions
// const mapActionsToProps = {
//   updateUser: actionNew,
//   getUser: actionGet,
// };

// using bind action creators to pass down to another compoenent
// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators(
//     {
//       updateUser: actionNew,
//     },
//     dispatch
//   );
// };

// const mapDispatchToProps = (dispatch, props) => {
//   return bindActionCreators(
//     {
//       updateUser: actionNew,
//     },
//     dispatch
//   );
// };

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

export default connect(
  mapStateToProps,
  // mapActionsToProps,
  mapDispatchToProps
)(App);
