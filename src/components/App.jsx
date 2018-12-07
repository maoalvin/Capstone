import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Shop from './Shop';



function App(){

  return (
    <div>
      <style global jsx>{`
        div { 
          font-family: Helvetica;
          font-size: 15px;
          line-height: 1.5;
          background-color: #f4f4f4;
        }
        .container {
          width: 80%;
          margin: auto;
          overflow: hidden;
      }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/about' component={About} />
        
      </Switch>
    </div>
  );
}



export default App;
