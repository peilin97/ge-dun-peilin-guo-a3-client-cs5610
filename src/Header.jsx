import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Search from './Search';
import Edit from './Edit';
// import Test from './Test';
import './index.css';



export default function Header() {

  return (
    <Router>
        <div className="navbar">
          <h2>URL Shortener</h2>
          <NavLink className="navPadding" exact to="/">
            Home
          </NavLink>
          <NavLink className="navPadding" exact to="/about">
            About
          </NavLink>
          <Search />
        </div>
        <Switch>
          <Route exact
            path="/url/:shortenedURL/edit"
            render={(props) => <Edit {...props} />} />
          {/* <Route path="/url/:id/edit" exact component={Test} /> */}
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
        </Switch>      
      </Router>
  );
}
