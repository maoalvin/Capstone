import React from 'react';
import Topnav from './Topnav';



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
            
            p {
                font-size: 20px;
                margin-bottom: 0px;
                font-family: monospace;
            }
            
              form {
                text-align: right;
                margin-left: 20px;
              }
        `}</style>
      <header>
        <div id='header'>
          <h1>Women's Fashion</h1>
          <p>For Fashion Lovers</p>
          <form>
              <input type="text" placeholder="Search"/>
              <button className="btn"><i className="fa fa-search"></i></button>
          </form>
          
        </div>
        <Topnav/>
      </header>
    </div>
  );
}


export default Header;