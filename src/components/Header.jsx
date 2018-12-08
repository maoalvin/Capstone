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
                 display: block;
                 padding: 0 20px 0 20px;
                 
             }
             header #header {
                 float: left;
                 margin-bottom: 5px;
                 
             }

             header nav {
                 float: right;
                 margin-top: 10px;
             }
      
             

          
        `}</style>
      <header>
        <script jsx> {
          function responsiveNavbar() {
            let x = document.getElementById('myTopnav');
            if (x.className === 'topnav') {
              x.className += ' responsive';
            }  else {
              x.className = 'topnav';
            }
          }   
        } </script>
        <div id='header'>
          <h1>Clothing Shop</h1>
        </div>
        <nav>
          <ul>
            <li><Link  style={{ color: 'black', textDecoration: 'none'}} to="/">Home</Link></li>
            <li><Link  style={{ color: 'black', textDecoration: 'none' }} to="/shop">Shop</Link></li>
            <li><Link  style={{ color: 'black', textDecoration: 'none' }} to="/about">About Us</Link></li>
            <li><Link style={{ color: 'black', textDecoration: 'none'}} to="/cart">Cart</Link> </li>
            <a href="javascript:void(0);" class="icon" onClick="responsiveNavBar()">
              <i class="fa fa-bars"></i>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}


export default Header;