import React, {useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';

export default function Search() {
  const [original, setOriginal] = useState('');
  const [shortened, setShortened] = useState('');
  const history = useHistory();

  const onSearch = () => {
    Axios.get('https://a3-server-cs5610.herokuapp.com/url/'+shortened+'/edit')
    .then(res => {
      setOriginal(res.data.original);
      history.push({
        pathname: "/url/"+shortened+"/edit",
        state: {
          original: res.data.original,
        }
      });
    })
    .catch(err => {
      alert(err.response.data);
      // console.dir(err.response.data);
    });
  }

  return (
    <div className="searchContainer">
        <input
        value={shortened}
        className = "searchInput"
        placeholder = "Input your path ID"
        onChange={(e) => setShortened(e.target.value)}>
        </input>
        <button className = "searchButton">
          <FontAwesomeIcon icon={faSearch} onClick={onSearch} />
        </button>
        {/* <button onClick={onSearch}>Search</button> */}
    </div>
  )
}