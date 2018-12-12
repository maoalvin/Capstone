import React from 'react';
import { Link } from 'react-router-dom';


function responsiveNavbar() {
    console.log(responsiveNavbar)
    let x = document.getElementById('myTopnav')
    if (x.className === 'topnav') {
      x.className += ' responsive';
    }  else {
      x.className = 'topnav';
    }
  }   

function Topnav () {
    return (
        <div>
            <style>
                {`
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
                    .topnav.responsive {
                      position: relative;
                      display: inline-block;
                    }
                    .topnav.responsive .icon {
                      display: none;
                      right: 0;
                      top: 0;
                      
                    }
                    .topnav.responsive a {
                      float: none;
                      display: block;
                      text-align: left;
                      position: relative;
                    }
                  }
                
                `}
            </style>
            <div className="topnav" id="myTopnav">
          <a href="/" className="active">Home</a>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <a href="javascript:void(0);" className="icon" onClick={responsiveNavbar}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
        </div>
    )
}

export default Topnav;