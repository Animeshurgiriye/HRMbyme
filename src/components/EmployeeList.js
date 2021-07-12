import { Typography, Button, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { db } from "../firebase";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  listWrapper: {
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
  tableHeadlineContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  headingLine: {
    textTransform: "uppercase",
    fontWeight: "bold !important",
    letterSpacing: 5,
  },
  tableHead: {
    fontWeight: "bold !important",
  },
}));
const EmployeeList = () => {
  // const { employees, removeEmployee } = useContext(GlobalContext);
  const classes = useStyles();
  let history = useHistory();
  const [emp, setEmp] = useState([]);
  const [removeDone, SetRemoveDone] = useState(false);

  useEffect(() => {
    db.collection("employees")
      .get()
      .then((snap) => {
        setEmp([]);
        const empData = [];
        snap.docs.forEach((doc) => {
          empData.push(doc.data());
        });
        setEmp(empData);
      });
  }, [removeDone]);

  const removeEmp = (id) => {
    console.log(id);
    db.collection("employees")
      .doc(id)
      .delete()
      .then(() => {
        console.log("remove data done");
      });
  };

  const editEmp = (id) => {
    console.log(id);
    history.push(`/edit`, id);
  };

  return (
    <div className={classes.listWrapper}>
      {emp.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <div className={classes.tableHeadlineContainer}>
              <Typography className={classes.headingLine}>
                Employees List
              </Typography>

              <Button
                className={classes.addBtn}
                size="large"
                startIcon={<Add size="medium" />}
                onClick={() => {
                  history.push("/add");
                }}
                variant="contained"
                color="primary"
              >
                Add Employee
              </Button>
            </div>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead}>
                    Employee Id
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Name
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Designation
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Location
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Edit details
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Remove details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emp.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell component="th" scope="epmloyee">
                      {employee.id}
                    </TableCell>
                    <TableCell align="center">{employee.name}</TableCell>
                    <TableCell align="center">{employee.designation}</TableCell>
                    <TableCell align="center">{employee.location}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => editEmp(employee.id)}
                      >
                        Edit Employee
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => {
                          removeEmp(employee.id);
                          SetRemoveDone(true);
                        }}
                      >
                        Remove Employee
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Typography>No data.</Typography>
      )}
    </div>
  );
};

export default EmployeeList;
