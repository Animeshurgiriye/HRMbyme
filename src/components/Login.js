import { useState } from "react";
import { authentication } from "../firebase";
import { useHistory } from "react-router";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logInWrapper: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#fff",
    fontFamily: "Inter !Important",
    padding: "0px 50px ",
    width: "fit-content",
    height: 380,
    [theme.breakpoints.up(768)]: {
      background: "#fff",
    },
    [theme.breakpoints.up(1280)]: {},
    [theme.breakpoints.up(1440)]: {},
  },
  inputs: {
    margin: "15px 0px",
  },
  loginBtn: {
    margin: "15px 0px",
  },
}));

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [admin, setAdmin] = useState(initialState);
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = () => {
    authentication
      .signInWithEmailAndPassword(admin.email, admin.password)
      .then(() => {
        console.log("admin sign-in successfull");
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.logInWrapper}>
      <Typography>Sign In</Typography>
      <TextField
        className={classes.inputs}
        placeholder="Enter Email"
        label="Email"
        onChange={(e) => {
          setAdmin({ ...admin, email: e.target.value });
        }}
      />

      <TextField
        className={classes.inputs}
        type="password"
        placeholder="Enter Password"
        label="Password"
        onChange={(e) => {
          setAdmin({ ...admin, password: e.target.value });
        }}
      />

      <Button
        className={classes.loginBtn}
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
