import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        
    <div className='container'>
      <style jsx>
        {`
                #footer {
                    justify-content: center;
                    text-align: center;
                    font-size: 12px;
                }
                h1 {
                    font-family: monospace;
                    font-size: 20px;
                    text-decoration: underline;
                }
                #social-media a {
                    font-size: 30px;
                    color: black;
                    margin: 5px;
                }
                `}
      </style>
      <div id='footer' className='row'>
        <div className='col col-md-4'>
          <h1>Contact Us</h1>
          <p>Call or email us at:</p>
          <p><i className='fa fa-phone'></i> +1 (206)-902-7730</p>
          <p><i className='fa fa-envelope'></i> julbade21@gmail.com</p>
          <p><i className='fa fa-map-marker'></i> 10426 SE 196th St. Renton, WA</p>
        </div>
            
        <div className='col col-md-4'>
          <h1>Information</h1>
          <p><Link style={{ color: 'black' }} to='/about'>About us</Link></p>
          <p><Link style={{ color: 'black' }} to='/shop'>Our Products</Link></p>
          <p><a style={{ color: 'black' }} href='#'>FAQ</a></p>
        </div>
        <div className='col col-md-4'>
          <h1>Profile</h1>
          <p>Follow us:</p>
          <p id="social-media"><a href='https://www.facebook.com/christine.joyce.121772?ref=br_rs'><i className='fa fa-facebook-square'></i></a> 
            <a href='https://www.instagram.com/cjsancheta/?hl=en'><i className='fa fa-instagram'></i></a> <a href='#'><i className='fa fa-twitter'></i></a></p>
            
        </div>
      </div>
            
    </div>
  );
}

export default Footer;