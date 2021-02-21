import React from "react";
import { fetchTodos } from "../store/actions";
import { connect } from "react-redux";

function UpdateTodos(props) {
  const fetchTodosFn = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((todos) => {
        const todoArr = todos.slice(0, 5);
        props.fetchTodos(todoArr);
      });
  };

  return (
    <div>
      <h3>Disptach Actions</h3>
      <button className="add-todo" onClick={fetchTodosFn}>
        Fetch Todos
      </button>
    </div>
  );
}

const mapDispatchToProps = { fetchTodos };

export default connect(null, mapDispatchToProps)(UpdateTodos);
