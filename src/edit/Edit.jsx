import React, {useState} from 'react';
import Axios from 'axios';
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import './edit.css';

export default function Edit() {
  const {shortenedURL} = useParams();
  const location = useLocation();
  const history = useHistory();
  const [oldURL, setOldURL] = useState(location.state.original);
  const [newURL, setNewURL] = useState('');
  // for delete popup window
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div className="customContainer editContainer">
      <div className="editItem">
        <span className="boldFont">Path ID: </span>
        {shortenedURL}
      </div>
      <div className="editItem">
        <span className="boldFont">current original URL: </span>
        {oldURL}
      </div>
      <form className="editItem editForm">
        <label className="boldFont editLabel" htmlFor="newURL">
          New URL
        </label>
        <input id = "newURL"
          value={newURL} 
          onChange={(e) => setNewURL(e.target.value)}
        />
      </form>
      <button
        className="editItem"
        onClick={onUpdate}>
          Update
      </button>
      <button
        className="editItem"
        onClick={handleShow}
      >Delete</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete This Path ID?</Modal.Title>
        </Modal.Header>
        <Modal.Body>You won't be able to use this link anymore.</Modal.Body>
        <Modal.Footer>
          <button onClick={onDelete}>
            Delete
          </button>
          <button onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}