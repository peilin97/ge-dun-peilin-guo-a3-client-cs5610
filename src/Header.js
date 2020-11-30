import React, { useEffect } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Search from "./Search";


export default function App() {
  useEffect(() => {
    Axios.get('https://a3-server-cs5610.herokuapp.com/')
    .then(function() {
      console.log("react-axios-get");
    })
  });

  return (
    <React.StrictMode
            style={{
                width: window.innerWidth > 350 ? '100%' : '300px',
            }}>
            <SizeContext.Provider value={{ state, dispatch }}>
                <Router>
                    <div className="navbar">
                        <NavLink to="/" exact>
                            Home
                        </NavLink>{' '}
                        |
                        <NavLink to="/game" exact>
                            Game
                        </NavLink>{' '}
                        |{' '}
                        <NavLink to="/gameRule" exact>
                            Game Rule
                        </NavLink>
                    </div>
                    <div className="container">
                        <Route path="/game" exact component={App} />
                        <Route path="/" exact component={Home} />
                        <Route path="/gameRule" exact component={GameRule} />
                    </div>
                </Router>
            </SizeContext.Provider>
        </React.StrictMode>
  );
}
