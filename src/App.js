// importing libraries
import React from 'react';

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
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
