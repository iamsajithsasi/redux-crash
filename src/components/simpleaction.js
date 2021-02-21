import React, { useState } from "react";
import { updateUser } from "../store/actions";
import { connect } from "react-redux";

function SimpleActions(props) {
  const [user, setUser] = useState("");

  const updateUserFn = () => {
    props.updateUser(user);
    setUser("");
  };

  return (
    <div>
      <h3>Simple Actions</h3>
      <input onChange={(e) => setUser(e.target.value)} value={user} />
      <button className="add-todo" onClick={updateUserFn}>
        Update User
      </button>
    </div>
  );
}

export default connect(null, { updateUser })(SimpleActions);
