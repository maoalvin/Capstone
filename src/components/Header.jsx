import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <div className='container'>
           <style jsx>{`
             #header {
                 background-color: #35424a;
                 color: white;
                 padding-top: 30px;
                 min-height: 70px;
                 border-bottom: red 3px solid;
             }
             div ul {
                 margin: 0;
                 padding: 0;
             }
             div li {
                 float: left;
                 display: inline;
                 padding: 0 20px 0 20px;
             }

          
        `}</style>
        <div id='header'>
        <h1>Clothing and Sleep Wear</h1>
        <nav>
            <ul>
                <li> <Link  style={{ color: 'white', textDecoration: 'none'}} to="/">Home</Link></li>
                <li><Link  style={{ color: 'white', textDecoration: 'none' }} to="/shop">Shop</Link></li>
                <li><Link  style={{ color: 'white', textDecoration: 'none' }} to="/about">About Us</Link></li>
                <li><Link  style={{ color: 'white', textDecoration: 'none' }} to="/about">Sleep Wear</Link></li>
                <li><Link  style={{ color: 'white', textDecoration: 'none' }} to="/about">Clothing</Link></li>
            </ul>
        </nav>
        </div>
    </div>
  );
}


export default Header;