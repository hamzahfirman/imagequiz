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
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
