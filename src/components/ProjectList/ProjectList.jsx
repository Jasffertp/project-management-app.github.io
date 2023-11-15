import React from "react";

function ProjectList(props) {
  if (props.Projects.length !== 0) {
    return props.Projects.map((el) => {
      return (
        <p key={el.id}>
          {el.name} {el.description} {el.date} - tasks{" "}
          {el.tasks ? "there are tasks" : "none"}
        </p>
      );
    });
  }

  return (
    <>
      <p>There are no projects</p>
    </>
  );
}

export default ProjectList;
