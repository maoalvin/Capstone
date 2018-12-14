import React from 'react';
import { Link } from 'react-router-dom';
import sample from '../assets/image/pajama.jpg';
import homePicture from '../assets/image/home-image.jpeg';
import homePicture2 from '../assets/image/home-image3.jpeg';
import homePicture3 from '../assets/image/home-image3.jpg';


function Home() {
  return (
    <div>
      <style jsx>{`
             @import url('https://fonts.googleapis.com/css?family=Crafty Girls');
           .homePage { 
               background-color: white;
            
            
           }
            img {
            max-height: 450px;
            height: 100%;
            width: 100%;
            }
           
           
           .container {
            position: relative;
            max-width: 1400px;
            width: 100%;
            
          }
          
          .image {
            display: block;
            width: 100%;
            height: auto;
          }
          
          .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: black;
          }
          
          .container:hover .overlay {
            opacity: 0.7;
          }
          
          .text {
            color: black;
            font-size: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
            font-family: monospace;
          }
          button {
            border-raduis: 20px;
            padding: 15px;
            margin: 15px;
            width: 100px;
            color: black;
          }

          h2 {
            text-align: center;
            font-family: 'Crafty Girls';
            margin: 20px; auto;
          }
          p {
            position: absolute; 
            bottom: 0; 
            background: rgb(0, 0, 0);
            background: rgba(0, 0, 0, 0.5); /* Black see-through */
            color: #f1f1f1; 
            width: 100%;
            transition: .5s ease;
            opacity:0;
            color: white;
            font-size: 20px;
            padding: 20px;
            text-align: center;
            font-family: monospace;
            
          }
          #picture-row:hover p {
            opacity: 1;
          }
          #picture-row2:hover p {
            opacity: 1;
          }
          #picture-row3:hover p {
            opacity: 1;
          }
          h4 {
            text-align: center;
            font-size: 20px;
          }
         
         
        `}</style>
      <div className='homePage'>
        <div className='container'>
          <img src={sample} alt="Avatar" className="image"/>
            <div className="overlay">
            <div className="text"><Link to="/shop"><button className="btn btn-secondary">SHOP</button></Link></div>
           </div>
         </div>
         <h2>Sleep Wear For Girls</h2>
        </div>
        <div className='row'>
        <div id='picture-row' className='col col-md-4'>
        <h4>Superminky Robe</h4>
        <img  src={homePicture}/>
        <p>$10.99</p>
        </div>
        <div id='picture-row2' className='col col-md-4'>
        <h4>Superminky Robe</h4>
        <img src={homePicture2}/>
        <p>$5.99</p>
        </div>
        <div id='picture-row3' className='col col-md-4'>
        <h4>Superminky Robe</h4>
        <img src={homePicture3}/>
        <p>$7.99</p>
        </div>
        </div>

    </div>
  );
}


export default Home;