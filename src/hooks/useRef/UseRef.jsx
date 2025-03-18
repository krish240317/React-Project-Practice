import React, { useRef } from 'react'

export const UseRef = () => {

    const username=useRef(null);
    const password=useRef(null);


    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }
  return (
    <>
    <h1>UseRef Ex</h1>
    <form onSubmit={handelSubmit} >
        <input type="text"  id='username' ref={username}/>
        <br />
        <input type="text"  id='Password' ref={password}/>
        
        <button>Submit</button>
    </form>
    </>
  )
}

