import React from "react";
import Footer from "./components/footer";
import AddTodo from "./containers/addtodo";
import VisibleTodoList from "./containers/visibletodolist";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);
export default App;
