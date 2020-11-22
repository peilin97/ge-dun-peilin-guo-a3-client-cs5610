import React, { useEffect } from 'react';
import Axios from 'axios';

export default function App() {
  useEffect(() => {
    Axios.get('https://a3-server-cs5610.herokuapp.com/')
    .then(function() {
      console.log("react-axios-get");
    })
  }
    
);

  return (
    <div>
      REACT
    </div>
  );
}
