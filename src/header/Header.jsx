import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Search from './Search';
import Edit from '../edit/Edit';
import './header.css';

export default function Header() {
    return (
        <Router>
            <div className="navbar flexRow">
                <a href="/" className="navbarItem smallerText">
                    URL Shortener
                </a>
                <Search />
                <a href="/about" className="navbarItem smallerText">
                    About
                </a>
            </div>
            <Switch>
                <Route
                    exact
                    path="/url/:shortenedURL/edit"
                    render={props => <Edit {...props} />}
                />
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
}
