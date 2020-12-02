import React from 'react';
import Axios from 'axios';
import './home.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            urlList: [],
            originalURL: '',
            shortenedURL: '',
        };
    }

    onChange(key, event) {
        this.setState({ [key]: event.target.value });
    }

    onSubmit() {
        // create new input tuple
        Axios.post('https://a3-server-cs5610.herokuapp.com/url', {
            original: this.state.originalURL,
            shortened: this.state.shortenedURL,
        })
            .then(res => {
                console.log('Create a new url.');
                let urlPair = [this.state.originalURL, res.data.shortened];
                this.setState({
                    shortenedURL: res.data.shortened,
                    urlList: [...this.state.urlList, urlPair],
                });
                // update 2D array
            })
            .then(() =>
                this.setState({
                    originalURL: '',
                    shortenedURL: '',
                })
            )
            .catch(error => alert(error.response.data));
    }

    // ============================RENDER=====================================
    render() {
        return (
            <div className="homeContainer flexColumn customContainer">
                <form className="homeForm">
                    <label htmlFor="original" className="homeLabel boldFont">
                        Original URL
                    </label>
                    <input
                        className="homeInput"
                        id="original"
                        value={this.state.originalURL}
                        // placeholder = "Shorten your link"
                        onChange={e => this.onChange('originalURL', e)}></input>
                </form>
                <form className="homeForm">
                    <label htmlFor="branded" className="homeLabel boldFont">
                        Branded URL
                    </label>
                    <input
                        className="homeInput"
                        id="branded"
                        value={this.state.shortenedURL}
                        placeholder="Optional"
                        onChange={e =>
                            this.onChange('shortenedURL', e)
                        }></input>
                </form>
                <div className="homeForm">
                    <button
                        className="shortenButton"
                        onClick={() => this.onSubmit()}>
                        Shorten
                    </button>
                </div>

                <div className="shortenedLinksList">
                    {this.state.urlList
                        .slice(0)
                        .reverse()
                        .map(pair => (
                            <div className="flexRow shortenedLinksListItem">
                                <span className="hideLongURL">{pair[0]}</span>
                                <span className="boldFont">
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a
                                        href={
                                            'https://a3-server-cs5610.herokuapp.com/url/' +
                                            pair[1]
                                        }>
                                        {pair[1]}
                                    </a>
                                </span>
                                <button
                                    className="copyButton"
                                    onClick={() => {
                                        navigator.clipboard.writeText(pair[1]);
                                    }}>
                                    Copy
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}
