import React from "react";
import { Button, Image } from 'react-bootstrap';

const flip = () => {
  const sides = ['heads', 'tails']
  const side = sides[Math.floor(Math.random() * 2)]
  console.log(`Side: ${side}`)
  return side
}

const Coin = () => {
  const image = `${process.env.PUBLIC_URL}/images/${flip()}.png`
  console.log(`Image: ${image}`)
  return <Image src={image} />;
};

export default Coin;
