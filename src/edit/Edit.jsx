import React, {useState} from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';
import {useParams, useLocation, useHistory} from 'react-router-dom';

export default function Edit() {
  const {shortenedURL} = useParams();
  const location = useLocation();
  const history = useHistory();
  const [oldURL, setOldURL] = useState(location.state.original);
  const [newURL, setNewURL] = useState('');

  const onUpdate = () => {
    Axios.put('https://a3-server-cs5610.herokuapp.com/url/'+shortenedURL,
      {
        original: newURL,
      })
    .then(res => {
      console.log(res);
      alert("The URL is updated successfully!");
      setOldURL(newURL);
      setNewURL('');
    })
    .catch(
      err => alert(err.response.data)
    );
  }

  const onDelete = () => {
    Axios.delete('https://a3-server-cs5610.herokuapp.com/url/'+shortenedURL)
    .then(() => {
      alert("successfulluy deleted");
      history.push('/');
    });
  }
  

  return (
    <div className="customContainer">
      <div>{"Path ID: " + shortenedURL}</div>
      <div>{"current original URL: "  + oldURL}</div>
      <form>
        <label htmlFor="newURL">New Original URL:</label>
        <input id = "newURL"
          value={newURL} 
          onChange={(e) => setNewURL(e.target.value)}
        />
      </form>
      <button onClick={onUpdate}>Update</button>
      <Popup
        trigger={<button>Delete</button>}
        modal
        >
        {close => (
          <div className="modal">
            <div>Delete This Path ID?</div>
            <div>You won't be able to use this link anymore.</div>
            <button onClick={onDelete}>Delete</button>
            <button onClick={()=>{close();}}>Cancel</button>
          </div>
        )}
      </Popup>
    </div>
  )
}