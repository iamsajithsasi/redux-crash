import React from "react";
import { connect } from "react-redux";
import "./App.css";
import SimpleActions from "./components/simpleaction";
import DispathActions from "./components/dispacthaction";
import UpdateTodos from "./components/updatetodos";

function App({ defaultState }) {
  return (
    <>
      <header>
        <h1 className="text-center">Redux Crash</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <SimpleActions />
            <br />
            <DispathActions />
            <br />
            <UpdateTodos />
          </div>
          <div className="col-md-4">
            {JSON.stringify(defaultState, null, 2)}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  defaultState: state,
});

export default connect(mapStateToProps)(App);
