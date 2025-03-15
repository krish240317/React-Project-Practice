import React from 'react'
import { useState } from 'react';
import './index.css'

export const ContactForm = () => {
    const [user,setUser]=useState({
        username:'',
        email:'',
        message:'',
    });


    const handelChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    const handelSubmit=(e)=>{
        e.preventDefalut();
        console.log(user);
    }
  return (
    <>
    <div className='container'>
        <h1>Contact Form</h1>
        <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={user.username} onChange={handelChange} />

                <label htmlFor="email">Password</label>
                <input type="email" name='email' value={user.password} onChange={handelChange} />

                <label htmlFor="message">message</label>
                <textarea type="textarea" name='message' value={user.textarea} onChange={handelChange}></textarea>
                <button type='submit'>
                    Submit
                </button>
            </form> 
    </div>
    </>
  )
}

