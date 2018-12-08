import React from 'react';
import sample from '../assets/image/pajama.jpg';


function Home() {
  return (
    <div>
      <style jsx>{`
           .homePage { 
               background-color: white;

           }
           img {
               width: 100%;
               max-height: 550px;
               height: 100%;
           }
        `}</style>
      <div className='homePage'>
        <img src={sample}/>
        <h1>Home Test Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris. Vitae ultricies leo integer malesuada. A pellentesque sit amet porttitor eget dolor morbi non arcu. Sed adipiscing diam donec adipiscing tristique risus nec. Feugiat vivamus at augue eget arcu dictum varius. Enim facilisis gravida neque convallis a. Lacus vestibulum sed arcu non odio euismod. Facilisis gravida neque convallis a cras semper auctor. Turpis massa tincidunt dui ut ornareasdsaddasdsadsadasdasdasdasdasdassadasdasldjnfsndbanb.sdfnsdbsekhfbsjon;rbgsljns;jgbwekfbse.kfekqBFWekhbfsdkjbcs,dmbvfs,dvc.ksdbvkwBVS,DHVB lectus.</p>
      </div>
    </div>
  );
}


export default Home;