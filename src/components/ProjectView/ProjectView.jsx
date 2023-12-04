import React, { useContext, useState } from "react";
import projects from "../../Context/Context";
import ProjectTasks from "../ProjectsTasks/ProjectsTasks";
import { Box, Divider, IconButton, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

function ProjectView() {
  const { projectValue, updateProjects } = useContext(projects);
  const [task, updateTask] = useState("");
  const [taskStatus, updateTaskStatus] = useState(false);

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

    if (task === "") {
      updateTaskStatus(true);
      return;
    } else {
      updateTaskStatus(false);
    }

    project.tasks.push(task);
    console.log("you are in the form submit handler");
    updateTask("");

    onTaskUpdate();
  };

  const onRemoveTask = (index) => {
    project.tasks.splice(index, 1);

    onTaskUpdate();
  };

  return (
    <div id={project.id}>
      <Typography variant="h3">
        <Box fontWeight={700}>{project.name}</Box>
      </Typography>
      <Box marginBottom={2}>
        <Typography variant="subtitle1">{project.date}</Typography>
      </Box>
      <Paper
        sx={{
          p: 3,
          width: 600,
        }}
      >
        <Box marginBottom={1}>
          <Typography variant="body1">{project.description}</Typography>
        </Box>
        <Typography variant="overline">Tasks</Typography>
        <form onSubmit={formSubmitHandler}>
          <Box marginBottom={2}>
            <TextField
              label="Add Project Task"
              variant="outlined"
              id="task"
              value={task}
              onChange={(val) => updateTask(val.target.value)}
              error={taskStatus}
              size="small"
              helperText={taskStatus ? "Please fill out this field" : null}
            />{" "}
            <IconButton type="submit">
              <AddIcon fontSize="medium" color="primary" />
            </IconButton>
          </Box>
        </form>
        <Box marginBottom={2}>
          <Divider marginBottom={2} />
        </Box>
        {project.tasks.length !== 0 ? (
          <ProjectTasks tasks={project.tasks} removeTask={onRemoveTask} />
        ) : (
          "No additional tasks"
        )}
      </Paper>
    </div>
  );
}

export default ProjectView;
