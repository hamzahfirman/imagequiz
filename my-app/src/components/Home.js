import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
/* Other Components */
import Images from './Images';
class Home extends React.Component {
  // State of this component
  constructor(props) {
    super(props);
    // State is an object
    this.state = {
        username: ''    
    };
  };

  // Render function: What user see on'Homepage'
  render() {
    // Capturing the passed in data from 'Login' component
    let username = '';
    const location = this.props.location;
    if(location) {
      if(location.state){
        if(location.state.user){
          username = location.state.user;
        }
      }
    }
    if(username.length > 0){
      return(
        <div>
          <div className="loginButton">
          {username}
          </div>
              Welcome to Image Quiz App Homepage!!
              <Images />
        </div>
      );
      }else{
        return (
          <div className="Home">
      
            <div className="loginButton">
                {username.length > 0 ? username: 
                <Link to='/login'>Login</Link>}
            </div>
              Welcome to Image Quiz App Homepage!!
          </div>
        );
    }
  }
};

export default Home;
