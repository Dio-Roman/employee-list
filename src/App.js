import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeePage from "./components/EmployeePage/EmployeePage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          <Route path="/:id" component={EmployeePage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
