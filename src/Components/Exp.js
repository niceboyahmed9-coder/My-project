import React from 'react'
import { useState } from 'react';

function Exp (props) {
    
    const [colour, setcolour] = useState('white');
    
      const [count, setcount] = useState(0);
      const wed = () => {
        (count == 0)? setcount(0):setcount(count-1)
      }
    
      return(
        <>
        <h1> colour : {colour} </h1>
        <button onClick={() => setcolour('blue')}> click </button>
        
    
        <h1> count: {count} </h1>
        <button onClick={() => setcount(count+1)}> Increament</button>
        <button onClick={() => setcount(0)}> reset</button>
        <button onClick={wed}>decreamet</button>
        </>
    ) 
    }

export default Exp;