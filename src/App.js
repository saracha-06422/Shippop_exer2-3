import React from 'react';
import Navbars from './components/Navbar';
import Home from './components/Home';
import Store from './components/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbars/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/store">
          <Store/>
        </Route>

      </div>
    </Router>

  );
}

export default App;
