import React, {useState} from 'react';
import Axios from 'axios';
// import Home from './Home';
// import { Route, Redirect } from 'react-router';
import {Link, useHistory} from 'react-router-dom';
import './index.css';


export default function Search() {
  const [original, setOriginal] = useState('');
  const [shortened, setShortened] = useState('');
  // const [isSearchable, setIsSearchable] = useState(false);
  const history = useHistory();

  const onSearch = () => {
    Axios.get('https://a3-server-cs5610.herokuapp.com/url/'+shortened+'/edit')
    .then(res => {
      setOriginal(res.data.original);
      // setIsSearchable(true);
      history.push({
        pathname: "/url/"+shortened+"/edit",
        state: {
          original: res.data.original,
        }
      });
    })
    .catch(err => {
      alert("The path ID doesn't exist.");
      console.log(err.message);
    });
  }

  return (
    <div>
        <input
        value={shortened}
        placeholder="Input your path ID"
        onChange={(e) => setShortened(e.target.value)}>
        </input>
          <button onClick={onSearch}>Search</button>
    </div>
  )
}

// export default class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isSearchable: false,
//       original: '',
//       shortened: '',
//     }    
//   }

//   onChange(key, event) {
//     this.setState(
//       {[key]: event.target.value}
//     )
//   }

//   onSearch(){
//     Axios.get('https://a3-server-cs5610.herokuapp.com/url/'+this.state.shortened+'/edit')
//     .then(res => {
//         this.setState({
//           isSearchable: true,
//           original: res.data.original
//         });
//     })
//     .then(()=>{
//       this.props.history.push("/url/"+this.state.shortened+"/edit");
//       console.log(this.props.history);
//     }
//     )
//     .catch(err => {
//       alert("The path ID doesn't exist.");
//       console.log(err.message);
//     })
//     .finally(
//       this.setState({
//         original: '',
//         shortened: '',
//         isSearchable: false,
//       })
//     );
//   }

//   render() {
    
//     let searchLink;
//     if (this.state.isSearchable) {
//       searchLink = <Link
//       exact to={{
//           pathname: "/url/"+this.state.shortened+"/edit",
//           state: {originalURL: this.state.original}
//       }}>
//       <button>Search</button>
//     </Link>;
//     console.log(this.state.original);
//     } else {
//       searchLink = <button>Search</button>;
//     }
//     return(
//       <div>
//         {/* <label> */}
//           <input
//           value={this.state.shortened}
//           placeholder="Input your path ID"
//           onChange={(e) => this.onChange('shortened', e)}>
//           </input>
//         {/* </label> */}
//         <div onClick={() => this.onSearch()}>
//           <button>Search</button>
//           {/* {searchLink} */}
//           {/* <Link 
//             exact to={{
//                 pathname: "/url/"+this.state.shortened+"/edit",
//                 state: {originalURL: this.state.original}
//             }}>
//             <button>Search</button>
//           </Link> */}
//         </div>
//         {this.state.isSearchable &&
//             <Redirect push exact to={{
//               pathname: "/url/"+this.state.shortened+"/edit",
//               state: {originalURL: this.state.origina}
//             }} />}
        
//         {/* <Route exact path="/">
          
//         </Route> */}
//       </div>
//   )}
// }