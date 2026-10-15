import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function Postapi() {

    const [data, setdata] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
        setdata(response.data)
        })
        .catch((error)=>{
        console.log(error)   
        })
    })

    return (
        <>
        <div> Postapi </div>
        { 
            data.map((item)=>{
                return <>
                <h1> {item.id} -- {item.title} </h1>
                <p> {item.body} </p>
                </>
            })
        }
        </>
    )



}

export default Postapi;