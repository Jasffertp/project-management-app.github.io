import React from "react";

function ProjectTasks(props) {
  return (
    <ul>
      {props.tasks.map((el, index) => {
        return (
          <li>
            {el}{" "}
            <button onClick={() => props.removeTask(index)}>Remove task</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectTasks;
