import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  editEmpWrapper: {
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

const EditEmployee = (route) => {
  const history = useHistory();
  const uselocation = useLocation();
  const classes = useStyles();
  // const { employees, editEmployee } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  // const [selectedUser, setSelectedUser] = useState({
  //   id: null,
  //   name: "",
  //   designation: "",
  //   location: "",
  // });
  const currentEmpId = uselocation.state;

  const editEmp = (currentEmpId) => {
    const newEmpDetails = {
      id: currentEmpId,
      name,
      location,
      designation,
    };

    db.collection("employees")
      .doc(currentEmpId)
      .set(newEmpDetails)
      .then(() => {
        console.log("details editted");
        history.push("/home");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editEmp(currentEmpId);
  };

  // const handleOnChange = (userKey, newValue) =>
  //   setSelectedUser({ ...selectedUser, [userKey]: newValue });

  // if (!selectedUser || !selectedUser.id) {
  //   return <div>Invalid Employee ID.</div>;
  // }

  return (
    <>
      <form className={classes.editEmpWrapper} onSubmit={onSubmit}>
        <Typography className={classes.formTitle}>
          Edit Employee Details
        </Typography>
        <TextField
          label="Name of employee"
          className={classes.inputs}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter name"
        />

        <TextField
          label="Location"
          className={classes.inputs}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          placeholder="Enter location"
        />

        <TextField
          label="Designation"
          className={classes.inputs}
          value={designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          type="text"
          placeholder="Enter designation"
        />

        <Button
          className={classes.btns}
          type="submit"
          variant="contained"
          color="primary"
        >
          Edit Employee
        </Button>
        <Button
          className={classes.btns}
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

export default EditEmployee;
