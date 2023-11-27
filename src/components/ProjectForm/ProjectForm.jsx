import React, { useContext, useState } from "react";
import projects from "../../Context/Context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, Container, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function ProjectForm() {
  const { updateProjects } = useContext(projects);
  const today = new Date();
  const [date, setDate] = useState();
  const [projectName, setName] = useState("");
  const [projectDesc, setDesc] = useState("");
  const [inputValidation, updateValidation] = useState({
    name: true,
    description: true,
    date: true,
  });

  const checkValidity = (items) => {
    const dateVal =
      date === undefined ? false : date.toDateString() < today.toDateString();

    if (
      items.target.name.value === "" ||
      items.target.description.value === "" ||
      dateVal
    ) {
      console.log("encountered error");
      updateValidation(() => {
        return {
          name: items.target.name.value !== "" || false,
          description: items.target.description.value !== "" || false,
          date: date !== undefined || date > today || false,
        };
      });

      return false;
    }

    return true;
  };

  const addNewProject = (items) => {
    items.preventDefault();

    if (!checkValidity(items)) return;

    const [name, description] = [
      items.target.name.value,
      items.target.description.value,
    ];

    const dateInput = date.toLocaleDateString();

    updateProjects((prevItems) => {
      return [
        ...prevItems,
        {
          id: prevItems.length,
          name: name,
          description: description,
          date: dateInput,
          tasks: [],
          isActive: false,
        },
      ];
    });

    updateValidation({
      name: true,
      description: true,
      date: true,
    });

    setDate();
    setName("");
    setDesc("");
  };

  return (
    <Card>
      <Box p={3}>
        <form onSubmit={addNewProject}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  label="Project Name"
                  placeholder="React Project"
                  error={!inputValidation.name}
                  helperText={
                    !inputValidation.name ? "Please fill out this field" : ""
                  }
                  value={projectName}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Project Deadline"
                    id="date2"
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    disablePast
                    slotProps={{
                      textField: {
                        helperText:
                          inputValidation.date ||
                          "Please input a date not less than today",
                        error: !inputValidation.date,
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  id="description"
                  placeholder="The Project is about..."
                  label="Project Description"
                  multiline
                  rows={4}
                  fullWidth
                  error={!inputValidation.description}
                  helperText={
                    !inputValidation.description
                      ? "Please fill out this field"
                      : ""
                  }
                  value={projectDesc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box marginTop={2}>
              <Button type="submit" id="submit" variant="contained">
                Submit
              </Button>
            </Box>
          </Container>
        </form>
      </Box>
    </Card>
  );
}

export default ProjectForm;
