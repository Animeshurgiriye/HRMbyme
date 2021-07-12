import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  addEmpWrapper: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#fff",
    fontFamily: "Inter !Important",
    padding: "0px 50px ",
    width: "fit-content",
    height: 500,
    [theme.breakpoints.up(768)]: {
      background: "#fff",
    },
    [theme.breakpoints.up(1280)]: {},
    [theme.breakpoints.up(1440)]: {},
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 500,
    padding: "20px 0px",
  },
  inputs: {
    margin: "15px 0px",
  },
  btns: {
    margin: "15px 0px",
  },
}));

const AddEmployee = () => {
  let history = useHistory();
  const classes = useStyles();
  // const { addEmployee, employees } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      location,
      designation,
    };
    // addEmployee(newEmployee);

    const dbRef = db.collection("employees").doc();

    newEmployee["id"] = dbRef.id;

    dbRef.set(newEmployee).then(() => {
      console.log("EMPLOYEE ADDED SUCCESSFULLY");
      history.push("/home");
    });
  };

  return (
    <>
      <form className={classes.addEmpWrapper} onSubmit={onSubmit}>
        <Typography className={classes.formTitle}>
          Enter Employee Details
        </Typography>
        <TextField
          label="Name of employee"
          className={classes.inputs}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />

        <TextField
          label="Location"
          className={classes.inputs}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Enter location"
        />

        <TextField
          label="Designation"
          className={classes.inputs}
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          type="text"
          placeholder="Enter designation"
        />

        <Button
          className={classes.btns}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Employee
        </Button>
        <Button
          className={classes.btns}
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/home");
          }}
        >
          Cancel
        </Button>
      </form>
    </>
  );
};

export default AddEmployee;
