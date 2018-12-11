import React from 'react';


function Footer() {
    return (
        
        <div className='container'>
            <style>
                {`
                #footer {
                    justify-content: center;
                    text-align: center;
                }
                `}
            </style>
            <div id='footer' className='row'>
            <div className='col col-md-4'>
            <h1>Contact Us</h1>
            <p>Call or email us at:</p>
            <p><i className='fa fa-phone'></i> +1 (206)-902-7730</p>
            <p><i className='fa fa-envelope'></i> julbade21@gmail.com</p>
            </div>
            
            <div className='col col-md-4'>
            <h1>Information</h1>
            </div>
            <div className='col col-md-4'>
            <h1>Profile</h1>
            </div>
            </div>
            
        </div>
    )
}

export default Footer;