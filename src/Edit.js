import React, { useEffect } from 'react';
import Axios from 'axios';
const express = require('express');
const router = express.Router();

export default class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataOrginalURL: '',
      dataShortenedURL: '',
    }    
  }

  onChange(key, event) {
    this.setState(
      {[key]: event.target.value}
    )
  }

//   onSearch(){
//     Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL',
//     {params:{shortenedURL:this.state.dataShortenedURL}})
//     .then(function() {
//         return Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL')
//     })
//     .catch(err=>{
//         console.log(err);
//     });
//   }

  onSubmit(){
      Axios.put('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL',
      {
        orginal: this.state.orginalURL,
      })

  }

  onDelete(){
      Axios.delete('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL')
  }

  render(){
      return(
          <>
          {/* SHORTENED URL */}
          <label for="shortened">Shortened URL:</label>
          <div>{this.state.dataShortenedURL}</div>

          <label for="org">Original URL:</label>
          <input id = "org" value={this.state.dataOrginalURL} 
          onChange={(e) => this.onChange('dataOrginalURL', e)}></input>

          <button onClick={() => this.onSearch()}>Submit</button>

          {/* DELETE */}
          <button onClick={() => this.onDelete()} >Delete</button>

          </>
      )
  }
}