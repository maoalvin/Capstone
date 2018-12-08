import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <div className='container'>
           <style jsx>{`
             header {
                 background-color: white;
                 color: black;
                 padding: 50px;
                 min-height: 70px;
                 
                
             }
             header ul {
                 margin: 0;
                 padding: 0;
                 
                 
                 
             }
             header li {
                 float: left;
                 display: inline;
                 padding: 0 20px 0 20px;
                 
             }
             header #header {
                 float: left;
                 margin-bottom: 5px;
                 
             }

             header #header h1 {
                 margin: 0;
             }
             header nav {
                 float: right;
                 margin-top: 10px;
             }
             button {
                 margin-left: 2px;
                 height: 29px;
                 font-size: 10px;
                 padding-bottom: 5px;
             }
             

          
        `}</style>
        <header>
        <div id='header'>
        <h1>Clothing and Sleep Wear</h1>
        </div>
        <nav>
            <ul>
                <li><Link  style={{ color: 'black', textDecoration: 'none'}} to="/">Home</Link></li>
                <li><Link  style={{ color: 'black', textDecoration: 'none' }} to="/shop">Shop</Link></li>
                <li><Link  style={{ color: 'black', textDecoration: 'none' }} to="/about">About Us</Link></li>
                <li><Link style={{ color: 'black', textDecoration: 'none'}} to="/cart">Cart</Link> </li>
            </ul>
        </nav>
        </header>
    </div>
  );
}


export default Header;