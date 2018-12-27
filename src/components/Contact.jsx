import React from 'react';
import contact from '../assets/image/contact.jpg';


function Contact() {
  return (
    <div>
      <style jsx>
        {`
           @import url('https://fonts.googleapis.com/css?family=Sofia');
           
        h1 {
          text-align: center;
          padding: 20px;
          margin: 20px;
          background-color: pink;
        }


       h2, p {
         text-align: left;
         font-family: 'Sofia';

        }
        #secondContact {
          float: right;
          padding-right: 100px;
          margin: auto;
        }
        #firstContact {
          float: left;
          padding-left: 100px;
          margin: auto;
        }

       

         #contact {
           height: auto;
           width: 100%;
         } 
         textarea {
          
          max-width: 400px;
          width: 100%;
          height: auto;
         }
       
         
        

         `}
      </style>
      <img id="contact" src={contact}/>
      <br/>
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col col-md-6">
          <div id="firstContact">
      
            <p>Julius Bade</p>
            <p><i className='fa fa-phone'></i> +1 (206)-902-7730</p>
            <p><i className='fa fa-envelope'></i> julbade21@gmail.com</p>
            <p><i className='fa fa-map-marker'></i> 10426 SE 196th St. Renton, WA</p>
            <form id="formOne">
              <textarea type="text"/>
              <br/>
              <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="col col-md-6">
          <div id="secondContact">
            <p>CJ Ancheta</p>
            <p><i className='fa fa-phone'></i> +1 (206)-902-7730</p>
            <p><i className='fa fa-envelope'></i> julbade21@gmail.com</p>
            <p><i className='fa fa-map-marker'></i> 10426 SE 196th St. Renton, WA</p>
            <form id="formTwo">
              <textarea type="text"/>
              <br/>
              <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;