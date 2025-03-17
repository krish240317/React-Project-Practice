import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'

export const CleanUp = () => {

    const [count,setCount]=useState(0);
// Problem doing this without cleanup function it is changing on +2;
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount((prev)=>prev+1);
    //     },1000);
    // },[]);



    // to do correctly  
    //Here useeffect is running only 1 time but because of closure
    useEffect(()=>{
       const timer = setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000);

        return ()=>clearInterval(timer);
    },[]);

    return (
        <>
            <div className="container">
                <div className="counter">
                    <p>My Subscribers on Youtube</p>
                    <div className="odometer" id="odometer">
                        {count}
                    </div>
                    <h3 className="title">
                        Subscribers <br /> Realtime Counter
                    </h3>
                </div>
            </div>
        </>
    )
}
