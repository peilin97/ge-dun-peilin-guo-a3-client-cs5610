import React from 'react';
import Axios from 'axios';
import './index.css';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlList:[],
      originalURL: '',
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
        original: this.state.originalURL,
        shortened: this.state.shortenedURL,
      }
    ).then(res => {
        console.log("Create a new url.")
        let urlPair = [this.state.originalURL, res.data.shortened]
        this.setState({shortenedURL: res.data.shortened,
                       urlList: [...this.state.urlList, urlPair]})
        // update 2D array
    })
    .catch(error => alert(error.response.data))
    .finally(() => this.setState(
        {
          originalURL: '',
          shortenedURL: '',
        }    
      )
    )   
  }

  // ============================RENDER=====================================
  render(){
    return(
        <div className="editContainer">
          <form>
            <label htmlFor="original">Original URL:  </label>
            <input
              id="original"
              value={this.state.originalURL}
              onChange={(e) => this.onChange('originalURL', e)}>
              </input>
          </form>

          <label htmlFor="branded">Branded URL:  </label>
          <input
            id="branded"
            value={this.state.shortenedURL}
            placeholder="Optional"
            onChange={(e) => this.onChange('shortenedURL', e)}></input>

          <button onClick={() => this.onSubmit()}>Shorten URL</button>
          <div>
            {this.state.urlList.slice(0).reverse().map(pair => 
              
              <div className="printPairURL">
                <span className="hideLongURL">{pair[0]}</span>
                <span className="printShortenedURL">
                &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={"https://a3-server-cs5610.herokuapp.com/url/"+pair[1]}>{pair[1]}</a>
                  </span>
                <span><button onClick={() => {navigator.clipboard.writeText(pair[1])}}>Copy</button></span>
              </div>
          )
          }
          </div>
        </div>
    )
  }
}
