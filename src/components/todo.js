import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTodo } from "../actions";

const Todo = ({ onClick, completed, text, id, dispatch }) => {
  const handlecomplete = () => {
    dispatch(toggleTodo(id));
  };
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
      <button onClick={handlecomplete}>mark completed</button>
    </li>
  );
};
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapDispatchToProps)(Todo);
