import React, { useState } from "react";
import { Button, Image } from 'react-bootstrap';
// import Coin from "../Coin";

const location = {
  position: 'absolute', 
  left: '45%',
  bottom: '10%',
  fontSize: '30px'
};

const FlipButton = () => {
  const [side, setSide] = useState(`${process.env.PUBLIC_URL}/images/tails.png`);

  const buttonClick = () => {
    const sides = ['heads', 'tails'];
    const side = sides[Math.floor(Math.random() * 2)];
    console.log(`Side: ${side}`);
  
    const image = `${process.env.PUBLIC_URL}/images/${side}.png`;
    console.log(`Image: ${image}`);
  
    setSide(image);
  }

  return (
    <div>
      <Image src={side} />
      <Button style={location} variant="outline-primary" size="lg" onClick={buttonClick}>Flip Coin</Button>
    </div>
  );
};

export default FlipButton;
