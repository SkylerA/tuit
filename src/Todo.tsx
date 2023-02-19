import React from "react";

export type TodoProps = {
  label: string;
  key: string;
  tags?: string[];
  details?: string;
  color?: string;
  edit?: boolean;
  time?: Date;
};

const Todo = (props: TodoProps) => {
  return <div>Todo: {props.label}</div>;
};

export default Todo;
