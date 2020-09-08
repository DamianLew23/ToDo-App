import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>Zadania Do Zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : "Brak zadań do wykonania!"}
      </div>
      <hr />
      <div className="done">
        <h2>
          Zadania Zrobione <em>({done.length})</em>
        </h2>
        {done.length > 5 && (
          <span style={{ fontSize: "10px" }}>
            Wyświetlanych jest jedynie 5 ostatnich elementów.
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
