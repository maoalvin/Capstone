import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <div>
           <style jsx>{`
                
        `}</style>
        <div className='navbar'>
        <Link to="/">Home</Link> 
        <Link to="/about">About Us</Link> 
        <Link to="/shop">Shop</Link> 
        </div>
    </div>
  );
}


export default Header;