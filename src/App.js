// importing libraries
import React from 'react';
import { Switch, Route } from "react-router-dom"
// importing components
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UsersPage"
import NotFoundPage from "./pages/NotFoundPage"
import Test from "./components/Test"
//  imports related to redux

// importing stylesheet
import './App.css';
import "./Styles/App.scss"

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:userHandel" component={UserPage} />
        <Route exact path="/test" component = {Test} />
        <Route component={NotFoundPage} /> 
        {/* render={(props) => <UserPage  {...props} />}  */}

      </Switch>
    </div>
  );
}

export default App;
