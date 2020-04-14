import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Navigation />
            <Home />
          </Route>

          <Route exact path='/login'>
            <Navigation />
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Navigation />
            <SignUp />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
