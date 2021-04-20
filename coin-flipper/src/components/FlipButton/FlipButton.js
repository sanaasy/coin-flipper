import React from "react";
import { Button } from 'react-bootstrap';

const location = {
  position: 'absolute', 
  left: '45%',
  bottom: '10%',
  fontSize: '30px'
};

const FlipButton = () => {
  return (
    <Button style={location} variant="outline-primary" size="lg">Flip Coin</Button>
  );
};

export default FlipButton;
