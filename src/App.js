import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import FormView from './views/FormView';
import TableView from './views/TableView';
import HeaderDesign from './components/HeaderDesign';




function App() {
  return (
    <>
      <HeaderDesign />
      <Switch>
        <Route exact path="/" component={TableView} />
        <Route path="/form" component={FormView} />
      </Switch>
    </>
  );
}

export default App;
