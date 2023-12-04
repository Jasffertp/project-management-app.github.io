import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function ProjectTasks(props) {
  return (
    <List>
      {props.tasks.map((el, index) => {
        return (
          <ListItem
            secondaryAction={
              <IconButton onClick={() => props.removeTask(index)}>
                <DeleteIcon color="red" />
              </IconButton>
            }
          >
            <ListItemText primary={el} />
          </ListItem>
        );
      })}
    </List>
    // <ul>
    //   {props.tasks.map((el, index) => {
    //     return (
    //       <li key={index}>
    //         {index + 1}.) {el}{" "}
    //         <button onClick={() => props.removeTask(index)}>Remove task</button>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
}

export default ProjectTasks;
