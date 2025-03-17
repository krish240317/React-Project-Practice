import React from 'react'
import { useState,useEffect } from 'react';

export const HowNotToFechApi = () => {
    const [apiData, setApiData] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/posts"

  //Wrong Way it gets fetching api in infinite loop 
        // fetch(API)
        //     .then((res) => res.json())
        //     .then((data) => setApiData(data))
        //     .catch((error) => {
        //         console.log(error);
        //     });

        //True Way ,,, no matter usstae is updated inside the useeffect it will run only 1 time base on dependency array 
        useEffect(()=>{
             fetch(API)
            .then((res) => res.json())
            .then((data) => setApiData(data))
            .catch((error) => {
                console.log(error);
            });
        },[])


    return (
        <div className='container'>
            <ul>data:{
                apiData.map((curele)=>{
                    return <li key={curele.id}>{curele.title}</li>
                })
            }</ul>
        </div>
    )
}

