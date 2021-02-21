import React, { useState } from "react";
import { updateUser } from "../store/actions";
import { connect } from "react-redux";

function DispathActions(props) {
  const [user, setUser] = useState("");

  const updateUserFn = () => {
    props.updateUser(user);
    setUser("");
  };

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

export default connect(null, mapDispatchToProps)(DispathActions);
