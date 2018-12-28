import React from 'react';
import { Cloth } from './Cloth.js';
import PropTypes from 'react';


function Shop(props) {
var cloth=null;
$.ajax({
    async: false,  
    type: 'GET',
    url: 'http://localhost:8000/notes/5c19ecc879259eb130a22343',
    success: function (responseData) {
      cloth = new Cloth (responseData._id, responseData.name, responseData.imageUrl, responseData.price, responseData.size, responseData.description);

  }
  });

  console.log(cloth.name);
      return (
        <div className='container'>
          <style jsx>{`
                     @import url('https://fonts.googleapis.com/css?family=Sofia');
    
                     h3 {
                       font-family: 'Sofia';
                     }
            `}</style>
          <div className='shop'>
            <h3>Shop now</h3>
            
          
          </div>
        </div>
      );
     
    

}

Shop.propTypes = {
  
}

export default Shop;
