import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Main from "./layouts/admin/Main";
import Home from "./components/frontend/Home";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/admin" name="Admin" render={(props) => <Main {...props} />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
