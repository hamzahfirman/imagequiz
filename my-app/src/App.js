import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
//Components
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      {/* 
      Passes props source to the desired destination. Also
      '...' means concatination the passed in props with the 
      props in the Homepage 
      */}

      <Route exact path='/' render={ props => <Home {...props}/>}>
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
