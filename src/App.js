import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/add" component={AddEmployee} exact />
            <Route path="/edit" component={EditEmployee} exact />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
