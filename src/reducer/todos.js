const initialstate = {
  todolist: []
};
const todos = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todolist,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todolist: [
          state.map((todo) =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        ]
      };
    default:
      return state;
  }
};
export default todos;
