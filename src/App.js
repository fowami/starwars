//import React,{component} from 'react';
import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import characterList from './components/characterList';
//import CharacterDetails from './components/CharacterDetails';
import MyData from './components/MyData';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/characterList"} className="nav-link">
                    Character List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/MyData"} className="nav-link">
                    Detail
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/characterList" component={characterList} />
            <Route path="/MyData" component={MyData} />
          </Switch>
        </div>
      </Router>
    );
    }
}

export default App;
