import React from "react";
import "./App.css";
import SimpleActions from "./components/simpleaction";
import DispathActions from "./components/dispacthaction";

import { connect } from "react-redux";

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
            <DispathActions />
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
