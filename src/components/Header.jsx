import React from 'react';

function responsiveNavbar() {
    console.log(responsiveNavbar)
    let x = document.getElementById('myTopnav');
    if (x.className === 'jsx-421712327 topnav') {
      x.className += ' responsive';
    }  else {
      x.className = 'jsx-421712327 topnav';
    }
  }   

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
            .topnav {
                overflow: hidden;
                background-color: white;
                margin: 0 auto;
                width: 100%;
                font-size: 15px;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                
                        
              }
              
              .topnav a {
                float: left;
               
                color: black;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
              }
              
              .topnav a:hover {
                background-color: #ddd;
                color: black;
              }
              
              .active {
                background-color:  #ffe6e6;
                color: white;
              }
              
              .topnav .icon {
                display: none;
                color: black;
              }
              
              @media screen and (max-width: 600px) {
                .topnav a:not(:first-child) {display: none;}
                .topnav a.icon {
                  float: right;
                  display: block;
                }
              }
              
              @media screen and (max-width: 600px) {
                .topnav.responsive {position: relative;}
                .topnav.responsive .icon {
                  position: absolute;
                  right: 0;
                  top: 0;
                }
                .topnav.responsive a {
                  float: none;
                  display: block;
                  text-align: left;
                }
              }

        `}</style>
      <header>
        <div id='header'>
          <h1>Women's Fashion</h1>
          <p>For Fashion Lovers</p>
          <form>
              <input type="text" placeholder="Search"/>
              <button className="btn btn warning">Search</button>
          </form>
          
        </div>
        <div className="topnav" id="myTopnav">
          <a href="/" className="active">Home</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#cart"><i className="fa fa-shopping-cart"></i></a>
          <a href="javascript:void(0);" className="icon" onClick={responsiveNavbar}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
          

      </header>
    </div>
  );
}


export default Header;