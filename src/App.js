import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CreateBooking from './CreateBooking'
import ViewBooking from './ViewBooking'


import "./App.css";
import './App.css';

class AppComp extends Component {
  render() {
    return (
      <Router>
        <div className="image">
          <image className="image-fluid" src="logo1.png" alt="Don't go for the pic,we serve the best in the town"></image>
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <span className="navbar-brand font-weight-bolder"><img alt="navbar brand logo" src="logo1.png" height="30vw" width="30vw" className="mr-2"/>Restaurant Booking</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-2">
                <Link className="nav-link font-weight-bold" to="/createBooking">
                  Book Restaurant
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link className="nav-link font-weight-bold" to="/viewBooking">
                  View Booking Details
                </Link>
              </li>
            </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/createBooking" component={CreateBooking}></Route>
            <Route exact path ="/viewBooking" component={ViewBooking}></Route>
          
            {/* Add Route Paths */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppComp;