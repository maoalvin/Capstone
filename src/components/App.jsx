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
    <div className='container'>
      <style jsx>{`
        font-family: Helvetica;

        .container {
          max-width: 1500px;
          width: 100%;
        }
      `}</style>
      Capstone-Planning
    
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
