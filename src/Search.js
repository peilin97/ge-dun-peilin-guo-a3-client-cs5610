import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
// const express = require('express');
// const router = express.Router();


export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orginalURL: '',
      dataShortenedURL: '',
      isSearchable: false,
    //   brandedURL:'',
    }    
  }

  onChange(key, event) {
    this.setState(
      {[key]: event.target.value}
    )
  }

  onSearch(){
    Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL/edit',
    {params:{shortenedURL:this.state.dataShortenedURL}})
    .then(res => {
        this.setState({isSearchable: true})
    })
    .then(function() {
        return Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL')
    })
    .catch(err=>{
        console.log(err);
    });
    
    // if (this.state.isSearchable) {
    //     <Redirect to = {{ pathname: "/Edit" }} />}
  }

  render(){
      return(
          <>
          <input value={this.state.dataShortenedURL} 
        //   onkeydown="entersearch1(event)"
          onChange={(e) => this.onChange('dataShortenedURL', e)}>Search Shortened URL</input>
          <button onClick={() => this.onSearch()}>Search</button>
          </>
      )}
}
