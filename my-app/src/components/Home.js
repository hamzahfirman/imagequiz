import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
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

    return (
      <div className="Home">
        <div className="loginButton">
            {username.length > 0 ? username: 
            <Link to='/login'>Login</Link>}
        </div>
          Welcome to Image Quiz App Homepage!
      </div>
    );
  }
};

export default Home;
