import React from 'react';
// import Axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import './index.css';

export default function App() {
  // useEffect(() => {
  //   Axios.get('https://a3-server-cs5610.herokuapp.com/')
  //   .then(function() {
  //     console.log("react-axios-get");
  //   })
  // });

  return (
    // <React.StrictMode
    //         style={{
    //             width: window.innerWidth > 350 ? '100%' : '300px',
    //         }}>
      <Router>
        <div className="navbar">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about" exact>
            About
          </NavLink>
          <NavLink to="/edit" exact>
            Search
          </NavLink>
        </div>


        <div className="body">
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
            <Route path = "/edit" exact component={Search}/>
        </div>
      </Router>
    // </React.StrictMode>
  );
}
