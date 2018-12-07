import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <div>
           <style jsx>{`
                .navbar {
                    background-color: skyblue;
                    padding: 20px;
                }
                
        `}</style>
        <div className='navbar'>
       
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/about">Sleep Wear</Link>
        <Link to="/about">Clothing</Link>

        
        </div>
    </div>
  );
}


export default Header;