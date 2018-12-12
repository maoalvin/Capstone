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
              
              font-size: 25px;  
              color: black;
              display: flex;
              position: relative;
              width: 100%;
              font-family: serif;
              maring: 0 auto;
              
            }
            
            p {
                font-size: 15px;
                margin-bottom: 0px;
                font-family: monospace;
            }
            input {
              border-radius: 10px;
            }
            
        `}</style>
      <header>
      <div id='header'>
        <div className='container' id="links">
        <Link style={{ color: 'black' }} to='/login'><i className="fa fa-user-circle"></i></Link>    
        <Link style={{ color: 'black' }} to='/cart'><i className="fa fa-shopping-cart"></i></Link>
        </div>
        <hr></hr>
        
        <form>
              <input type="text" placeholder="Search"/>
              <button className="btn" type="submit"><i className="fa fa-search"></i></button>
          </form>
          <h3>Women's Fashion</h3>
          <p>For Fashion Lovers</p>
        </div>
        <Topnav/>
      </header>
    </div>
  );
}


export default Header;