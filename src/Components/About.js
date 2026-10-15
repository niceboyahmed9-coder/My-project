import React from "react";
import {useEffect, useState} from 'react';
import axios from 'axios';

function About (props){

   const [num, setnum ] = useState(0);
   const [a, seta ] = useState(0);

     useEffect(()=>{
      document.title = num + 2;
      seta (num+4)
   })
   return(
      <>
      <h1>hii</h1>
      <div> num : {num} </div>
      <button onClick={()=>{setnum(num+1)}}>+</button> <br></br>
      {a}
      </>
   )
}


export default About;

