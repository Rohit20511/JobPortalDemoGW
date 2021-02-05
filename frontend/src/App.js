import './App.css';
import React from 'react';
import Jobs from './components/Jobs/Jobs';
import JobDescription from './components/JobDescription/JobDescription';
import JobApply from './components/JobApply/JobApply';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/jobs/:jobid">
            <JobDescription/>
          </Route>
          <Route path="/apply/:jobid">
            <JobApply />
          </Route>
          <Route path="/">
            <Jobs />
          </Route>
          <Switch />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
