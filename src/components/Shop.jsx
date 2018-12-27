import React from 'react';
import { Cloth } from './Cloth.js';
import PropTypes from 'react';


function Shop(props) {
var cloth=null;
  cloth=$.ajax({
    type: 'GET',
    url: 'http://localhost:8000/notes/5c19ecc879259eb130a22343',    

  }).done((responseData) => {
     cloth = new Cloth (responseData._id, responseData.name, responseData.imageUrl, responseData.price, responseData.size, responseData.description);
     //console.log(cloth);


  }).fail(() => {

  }).responseJSON;

      console.log(cloth);
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
            {cloth.name}
          
          </div>
        </div>
      );
     
    

}

Shop.propTypes = {
  cloth: PropTypes.object,
}

export default Shop;