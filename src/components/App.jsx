import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';



function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      Capstone-Planning
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}



export default App;
