import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const myname = "rahul goyal ";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/230/300";
const img3 = "https://picsum.photos/260/300";
const link = "https://youtube.com";

ReactDOM.render(
  <>
  
   <h1 className="heading"> my name is {myname}</h1>
    <p>current Date = {currDate}</p>
    <p>current Time = {currTime}</p>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <a href={link} target="_youtube">
    <img src={img3} alt="" />
    </a>
    

    </>,
   
  document.getElementById('root')
);
 
 
