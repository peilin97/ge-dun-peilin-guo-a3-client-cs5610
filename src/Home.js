import React from 'react';
import Axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlList:[],
      orginalURL: '',
      shortenedURL: '',
    }    
  }

  onChange(key, event) {
    this.setState(
      {[key]: event.target.value}
    )
  }

  onSubmit(){
      // create new input tuple
    Axios.post(
      'https://a3-server-cs5610.herokuapp.com/url', 
      {
        orginal: this.state.orginalURL,
        shortened: this.state.shortenedURL,
      }
    ).then(res => {
        console.log("Create a new url.")
        this.setState({shortenedURL: res.shortened,})
        // update 2D array
    })
    .catch(error => console.log(error))
    .finally(() => this.setState(
        {
          orginalURL: '',
          shortenedURL: '',
        //   brandedURL:'',
        }    
      )
    )   
  }

//   copyURL(){
//   }

  // ============================RENDER=====================================
  render(){
    return(
      <>
        <div>
          <label for="org">Original URL:</label>
          <input id="org" value={this.state.orginalURL} onChange={(e) => this.onChange('orginalURL', e)}></input>

          {/* isBranded???? */}
          <button>Branded</button>
          <label for="branded">Branded URL:</label>
          <input id="branded" value={this.state.shortenedURL} onChange={(e) => this.onChange('shortenedURL', e)}></input>

          <button onClick={() => this.onSubmit()}>Submit</button>
          <div>
            {/* map index[1] */}
              {this.state.shortenedURL}
          </div>

          {/* <button onClick={() => this.copyURL()}>Copy</button> */}
          <button onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy</button>

        </div>

       
      </>
    )
  }
}
