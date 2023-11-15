import React, { useContext } from "react";
import projects from "../../Context/Context";

function ProjectForm() {
  const { projectValue, updateProjects, preview, updatePreview } =
    useContext(projects);

  const addNewProject = (items) => {
    items.preventDefault();
    const [name, description, date] = [
      items.target.name.value,
      items.target.description.value,
      items.target.date.value,
    ];

    updateProjects((prevItems) => {
      return [
        ...prevItems,
        {
          id: prevItems.length,
          name: name,
          desc: description,
          date: date,
          tasks: {},
        },
      ];
    });

    console.log(projectValue);
  };
  return (
    <form onSubmit={addNewProject}>
      <input type="text" id="name" placeholder="Project Name" />
      <input type="text" id="description" placeholder="Description" />
      <input type="date" id="date" />
      <input type="submit" id="submit" />
    </form>
  );
}

export default ProjectForm;
