import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server';
/* Other Components */
import Images from './Images';
// import Entry from './Entry';

class Home extends React.Component {
  // State of this component
  constructor(props) {
    super(props);
    // State is an object
    this.state = {
        username: '',
        quizzes: []    
    };
  };

  body = (aName) => {
    /* 
    Desconstruct an object
    
    The line below is equivalent to the 2 lines below */ 
    // const entries  = this.state.entries; 
    // const cursor = this.state.cursor;
    const { entries, cursor } = this.state;

    return( 

      <div id="welcomeMessage">
      Welcome to Image Quiz App Homepage!
      </div>
  );
  }

  componentDidMount() {

    // var catName = "";

    // const location = this.props.location;
    // // const cat = {
    // //     flowers: 0,animals: 1,mathematics: 2};
    // if(location) {
    //     if(location.state){
    //          if(location.state.categoryName){
    //             catName = location.state.categoryName;
    //             }
    //       }
    //  }

    // 'entries' - Calls a function 'fecthEntries()' in server.js component
    const quiz = server.fetchQuizzes().then(x => this.setState({quizzes: x})).catch(e => console.log(e));
    // Passes a list of objects/ entries frome entries.js
    // Once the user pressed 
    // Also, it is placed in this component because 'window' object 
    // only available after 'render()' object gets render.
   
}

  // Render function: What user see on'Homepage'
  render() {
    // Capturing the passed in data from 'Login' component
    let username = '';
    const { quizzes } = this.state;
    // 'location' - All of the passed in data from other components will
    // be stored here in the 'location' method by props.
    const location = this.props.location;
    if(location) {
      if(location.state){
        if(location.state.user){
          username = location.state.user;
        }
      }
    }
    {/* A user has been logged in to the website */}
    if(username.length > 0){
      let data = quizzes;
      return(
        <div>
          <Link to='/'>Logout</Link>
          <div className="loginButton">
          {username}
          </div>
              {this.body(username)}
              <Images aUsername={username} data={data}/>
        </div>
      );
      }
      if(quizzes.length > 0){
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
    return(
      <div>
          Data is loading...
      </div>
    );
  }
};

export default Home;
