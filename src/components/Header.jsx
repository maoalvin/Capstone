import React from 'react';
import Topnav from './Topnav';
import { Link } from 'react-router-dom';



function Header() {

  return (
    <div>
      <style jsx>{`
            position: sticky;
            top: 0;
            z-index: 9999;
            
            @import url('https://fonts.googleapis.com/css?family=Sofia');
            #header {
                text-align: center;
                background-color: white;
                margin-bottom: 0;
                font-family: 'Sofia';
                
              
            }
           
            #links {
              font-size: 15px;  
              text-align: right;
              color: black;
              margin-right: 20px;
              margin-left: 20px;
              justify-content: space-between;
              display: flex;
              
              
            }
            
            p {
                font-size: 20px;
                margin-bottom: 0px;
                font-family: monospace;
            }
            
            form {
                text-align: right;
                margin-right: 20px;
              }

            button {
              padding-top: 2px;
              
            }
         
            
        `}</style>
      <header>
        <div id='header'>
        <div id="links">
        <Link style={{ color: 'black' }} to='/login'>Log in</Link> Welcome 
        <Link style={{ color: 'black' }} to='/cart'>Cart<i className="fa fa-shopping-cart"></i></Link>
        </div>
        <form>
              <input type="text" placeholder="Search"/>
              <button className="button" type="submit"><i className="fa fa-search"></i></button>
          </form>
          <h1>Women's Fashion</h1>
          <p>For Fashion Lovers</p>
        </div>
        <Topnav/>
      </header>
    </div>
  );
}


export default Header;