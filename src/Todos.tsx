import React from "react";
import Todo, { TodoProps } from "./Todo";

type TodosProps = {
  todos: TodoProps[];
};

const Todos = (props: TodosProps) => {
  const { todos = [] } = props;

  console.log("test");
  return (
    <div>
      {todos.map((todo) => {
        return <Todo {...todo}></Todo>;
      })}
    </div>
  );
};

export default Todos;
