import React, { useState } from 'react';
import '../StdinfoComponents/StdinfoComponents.css';
import img from '../../assets/image/img1.jpeg';

const StdinfoComponents = () => {
  const [isvisible,setIsvisible] = useState(false)
  const togglevisibility = () => {
    setIsvisible(!isvisible)
  }
  
  
    return (
    <div className="container">
      <div className="card">
       
        <p><h4>Name: Vishwaraja R</h4></p>
        <p>Registration No: 212221220060</p>
        <button className="toggle-button" onClick={togglevisibility}>
          {isvisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isvisible ? 'visible' : 'hidden'}`}>
            <p>I am currently pursuing B.Tech(IT) at Saveetha Engineering College</p>
        </div>
    </div>
    </div>
  );
};

export default StdinfoComponents;