import React, { useContext } from "react";
import projects from "../../Context/Context";
import ProjectTasks from "../ProjectsTasks/ProjectsTasks";

function ProjectView() {
  const { projectValue, updateProjects } = useContext(projects);

  const project = projectValue.filter((el) => el.isActive === true)[0];

  const onTaskUpdate = () => {
    updateProjects((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === project.id) {
          return { ...item, tasks: project.tasks };
        } else {
          return { ...item };
        }
      });
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    project.tasks.push(e.target.task.value);

    onTaskUpdate();
  };

  const onRemoveTask = (index) => {
    project.tasks.splice(index, 1);

    onTaskUpdate();
  };

  return (
    <div id={project.id}>
      <h2>{project.name}</h2>
      {project.description} {project.date} - tasks{" "}
      <form onSubmit={formSubmitHandler}>
        <input placeholder="Input task here" type="text" id="task" />
        <button type="submit">Add task </button>
      </form>
      {project.tasks.length !== 0 ? (
        <ProjectTasks tasks={project.tasks} removeTask={onRemoveTask} />
      ) : (
        "No additional tasks"
      )}
    </div>
  );
}

export default ProjectView;
