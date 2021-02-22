import React, { useState, useEffect } from "react";
import { updateUser } from "../store/actions";
import { connect } from "react-redux";

function DispathActions(props) {
  const [user, setUser] = useState(props.defaultState.states.user);

  const updateUserFn = () => {
    props.updateUser(user);
    setUser("");
  };

  useEffect(() => {
    setUser(props.defaultState.states.user);
  }, [props.defaultState.states.user]);

  return (
    <div>
      <h3>Disptach Actions</h3>
      <input onChange={(e) => setUser(e.target.value)} value={user} />
      <button className="add-todo" onClick={updateUserFn}>
        Update User
      </button>
    </div>
  );
}

const mapDispatchToProps = { updateUser };

const mapStateToProps = (state) => ({
  defaultState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(DispathActions);
