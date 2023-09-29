import React from 'react'
import { useState,useEffect } from "react";
export default function Post(){
    const [data,setdata]=useState([{}])
    useEffect(()=>{fetch("/post").then(res=>res.json())

            .then(dd=>{setdata(dd)},console.log(data))

            .catch(err=>console.log(err))
},[])

    return(<>
    
     <div className='header'><h1>Student Details</h1></div>
     {data.map((post)=>{
     
        return(<>
      
                <h2>Name :</h2>
                <p>{post.name}</p> 
                <h2>Age :</h2>
                <p>{post.age}</p>
               <h2>RollNo :</h2>
               <p>{post.rollno}</p>
               <h2>Branch :</h2>
             <p>{post.branch}</p>
              <h2>Gender :</h2>
                <p>{post.gender}</p> 
              <h2>Address :</h2>     
              <p>{post.address}</p>
        </>)})
     }
    </>)
}