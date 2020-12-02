import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Search from './Search';
import Edit from '../edit/Edit';
import './header.css';
import { Navbar } from 'react-bootstrap';

export default function Header() {

  return (
    <Router>
      <div
        bg="light"
        variant="light"
        fixed="top"
        className="justify-content-betweens flexRow navbar">
        <a href='/' className="navbarItem smallerText">URL Shortener</a>
        <Search />
        <a href='/about' className="navbarItem smallerText">About</a>
        {/* <div className="navbar"> */}
          {/* <h2>URL Shortener</h2> */}
          {/* <NavLink className="navPadding" exact to="/">
            URL Shortener
          </NavLink> */}
          {/* <Navbar.Brand href='/'>URL Shortener</Navbar.Brand>
          <Search />
          <Navbar.Brand href='/about'>About</Navbar.Brand> */}
          {/* <NavLink className="navPadding" exact to="/about">
            About
          </NavLink> */}
        {/* </div> */}
        </div>
        <Switch>
          <Route exact
            path="/url/:shortenedURL/edit"
            render={(props) => <Edit {...props} />} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
        </Switch>      
      </Router>
  );
}
