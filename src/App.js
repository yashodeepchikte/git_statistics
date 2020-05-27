// importing libraries
import React from 'react';
import { Switch, Route } from "react-router-dom"
// importing components
import Header from "./components/Header/Header.component"
import HomePage from "./pages/Home/Home.Page.Component"
import UserPage from "./pages/User/User.Page.component"
//  imports related to redux

// importing stylesheet
import './App.css';

function App() {
  return (
    <div className="App container">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:userHandel" component={UserPage} />
        {/* render={(props) => <UserPage  {...props} />}  */}

      </Switch>
    </div>
  );
}

export default App;
