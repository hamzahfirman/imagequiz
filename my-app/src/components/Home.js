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

      return (
        <div className="Home">
          <div className="loginButton">
              {this.state.authenticated ? this.state.username: 
              <Link to='/login'>Login</Link>}
          </div>
            Welcome to Image Quiz App Homepage!
        </div>
      );
    }
};

export default Home;
