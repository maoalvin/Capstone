import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';
import Error404 from './Error404';
import Footer from './Footer';
import Login from './Login';
import Contact from './Contact';



function App(){

  return (
    <div>
      <style global jsx>{`
        body { 
          font-family: Helvetica;
          font-size: 15px;
          line-height: 1.5;
          
        }
        
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/shop' component={Shop} />
        <Route  path='/about' component={About} />
        <Route  path='/cart' component={Cart} />
        <Route  path='/login' component={Login} />
        <Route  path='/contact' component={Contact} />
        <Route component={Error404} />
    
      </Switch>
      <hr></hr>
      <Footer/>
      <br/><br/>
    </div>
  );
}



export default App;
