import React, {useState} from 'react';
import Axios from 'axios';
import Popup from 'reactjs-popup';
import {useParams, useLocation, useHistory} from 'react-router-dom';
// import { Route, Redirect } from 'react-router';
import './index.css';

export default function Edit() {
  const {shortenedURL} = useParams();
  const location = useLocation();
  const history = useHistory();
  const [oldURL, setOldURL] = useState(location.state.original);
  const [newURL, setNewURL] = useState('');
  // console.log(oldURL);
  // console.log(shortenedURL);
  // console.log(location);
  
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
      () => alert("Invalid URL")
    );
  }

  const onDelete = () => {
    Axios.delete('https://a3-server-cs5610.herokuapp.com/url/'+shortenedURL)
    .then(() => {
      alert("successfulluy deleted");
      history.push('/');
      // console.log(this.props.history.push('/'));
    });
  }
  

  return (
    <div className="editContainer">
            {/* SHORTENED URL */}
            <div>{"Path ID: " + shortenedURL}</div>
            <div>{"current original URL: "  + oldURL}</div>
            <form>
              <label htmlFor="newURL">New Original URL:</label>
              <input id = "newURL"
                value={newURL} 
                onChange={(e) => setNewURL(e.target.value)}
              />
              {/* DELETE */} 
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

// export default class Edit extends React.Component {
  
//   constructor(props) {
//     super(props);
//     if (this.props.location.state) {
//       var oldURL = this.props.location.state.originalURL;
//     }
//     console.log(oldURL);
//     this.state = {
//       oldURL: oldURL,
//       shortened: '',
//       newURL: '',
//       delete: false,
//     }    
//   }

//   componentDidMount(props) {
//     const {shortenedURL} = this.props.match.params;
//     console.log(this.props.location.state);
//     this.setState(() => ({
//       shortened: shortenedURL,
//     }))
//     if (this.props.location.state) {
//       this.setState(state => ({
//         oldURL: this.props.location.state.originalURL,
//       }));
//     }
//   }

//   onChange(event) {
//     this.setState(
//       {newURL: event.target.value}
//     );
//   }

//   // onSearch(){
//   //   Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL',
//   //   {params:{shortenedURL:this.state.dataShortenedURL}})
//   //   .then(function() {
//   //       return Axios.get('https://a3-server-cs5610.herokuapp.com/url/:shortenedURL')
//   //   })
//   //   .catch(err=>{
//   //       console.log(err);
//   //   });
//   // }

//   onSubmit(){
//     console.log("on submit");
//     console.log(this.state.newURL);
//     Axios.put('https://a3-server-cs5610.herokuapp.com/url/'+this.state.shortened,
//       {
//         original: this.state.newURL,
//       })
//     .then(res => {
//       console.log(res);
//       alert("The URL is updated successfully!");
//       this.setState({
//         oldURL: this.state.newURL,
//         newURL: ''
//       })
//     })
//     .catch(
//       () => alert("Invalid URL")
//     );
//   }

//   onDelete(){
//     Axios.delete('https://a3-server-cs5610.herokuapp.com/url/'+this.state.shortened)
//     .then(() => {
//       // console.log(this.props.history);
//       alert("successfulluy deleted");
//       // console.log(this.props.history.push('/'));
//       this.setState({delete: true});
//     });
//   }

//   render() {
//       let short = "Path ID: "+ this.state.shortened;
//       let oldOriginal = "current original URL: " + this.state.oldURL;
//       return(
//           <div className="editContainer">
//             {/* SHORTENED URL */}
//             <div>{short}</div>
//             <div>{oldOriginal}</div>
//             <form>
//               <label htmlFor="newURL">New Original URL:</label>
//               <input id = "newURL"
//                 value={this.state.newURL} 
//                 onChange={(e) => this.onChange(e)}
//               />
//               {/* DELETE */} 
//             </form>
//             <button onClick={() => this.onSubmit()}>Update</button>
//             <Popup
//               trigger={<button>Delete</button>}
//               modal
//               >
//               {close => (
//                 <div className="modal">
//                   <div>Delete This Path ID?</div>
//                   <div>You won't be able to use this link anymore.</div>
//                   <button onClick={() => this.onDelete()}>Delete</button>
//                   <button onClick={()=>{close();}}>Cancel</button>
//                 </div>
//               )}
//             </Popup>
//             {/* <Route exact path="/">
//               {this.state.isSearchable ?
//                 <Redirect to={{
//                   pathname: "/",
//                 }} /> :
//                 <Edit />}
//             </Route> */}
//           </div>
//       );
//   }
// }