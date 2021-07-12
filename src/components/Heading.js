import { Button, makeStyles, Typography } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

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
    color: "#fff",
    [theme.breakpoints.up(768)]: {
      background: "#fff",
    },
    [theme.breakpoints.up(1280)]: {},
    [theme.breakpoints.up(1440)]: {},
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    color: "#fff",
  },
  // heading: {
  //   fontSize: 20,
  //   fontWeight: 500,
  // },
  // addBtn: {
  //   fontSize: 15,
  //   margin: "10px 0px",
  // },
  greetText: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 5,
  },
}));

const Heading = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <div className={classes.headingWrapper}>
        <Typography className={classes.greetText}>Welcome Admin</Typography>

        {/* <Typography className={classes.heading}>Employees List</Typography>

        <Button
          className={classes.addBtn}
          size="small"
          startIcon={<Add size="medium" />}
          onClick={() => {
            history.push("/add");
          }}
          variant="contained"
          color="primary"
        >
          Add Employee
        </Button> */}
      </div>
    </>
  );
};

export default Heading;
