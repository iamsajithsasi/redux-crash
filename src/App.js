import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { actionNew } from "./index.js";
import { bindActionCreators } from "redux";

function App(props) {
  const { a, b } = props;

  const updateUserFn = () => {
    console.log(props);
    props.updateUser("Bhavya");
  };
  console.log(a);
  console.log(b);

  return (
    <div>
      <header>Redux Crash</header>
      <button onClick={updateUserFn}>Click</button>
      <p>{b}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  a: state.products,
  b: state.user,
});

// single action
const mapActionsToProps = {
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

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

export default connect(mapStateToProps, mapActionsToProps)(App);
