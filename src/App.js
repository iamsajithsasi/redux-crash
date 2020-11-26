import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { actionNew } from "./index.js";

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

const mapActionsToProps = {
  updateUser: actionNew,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
