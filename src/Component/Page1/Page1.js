import React, { useState } from "react";
import './Page1.css'
export default function Page1() {
    const [image, setImage] = useState(true);
    const handleClick = (isCreative)=>{
        setImage(isCreative);
    }
  return (
    <div className="page1">
      <div className="sec1">
        {image ? (
            <img src="./features1.jpg"/>
        ) : (
            <img src="./features2.jpg"/>
        )
        }
        
      </div>
      <div className="sec2">
        <span id="fri">Frienzly,</span> <span>Introducing a new way of friendship!</span>
        <p>
          Frienzly is a social networking application that helps you stay
          connected with your friends in a new way. Our goal is to provide you
          with some great features that can fill up the distance between your
          friends in an awesome way.
        </p>
        <div className="img-toggler">
            <h1 onClick={()=>handleClick(true)} style={{borderLeft: image ? '1px solid black' : 'none'}} id="creative">We Are Creative</h1>
            <h1 onClick={()=>handleClick(false)} style={{borderLeft: !image ? '1px solid black' : 'none'}} id="awesome">We Are Awesome</h1>
        </div>
      </div>
    </div>
  );
}
