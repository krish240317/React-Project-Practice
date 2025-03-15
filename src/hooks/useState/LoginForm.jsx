import React from 'react'
import './index.css'
import { useState } from 'react'

const LoginForm = () => {
    const [user, SetUser] = useState({
        username: '',
        password: ''
    })

    const handelChange = (e) => {
      const { name, value }=e.target;
        SetUser((prev) =>({...prev,[name]:value}));
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        // return user;
    }
    return (
        <div className='container'>

            <h1>Login Form</h1>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' value={user.username} onChange={handelChange} />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={user.password} onChange={handelChange} />

                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export { LoginForm }
