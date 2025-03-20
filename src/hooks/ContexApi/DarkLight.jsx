import React, { createContext, useState, use,useEffect } from 'react'

import './theam.css'

export const LightContext = createContext();

export const LightProvider = ({ children }) => {
    const [theam, setTheam] = useState('dark');

    const handelToggle = () => {
        return setTheam((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        document.body.className = theam === 'dark' ? 'theam1' : 'theam2';
    }, [theam]);
    
    return (

        <>
            <LightContext.Provider value={{ theam, handelToggle }}>
                {children}
            </LightContext.Provider>
        </>

    )
}

export const ToggleTheam = () => {

    const { theam, handelToggle } = use(LightContext);
    const Htheam = theam === 'dark' ? 'theam1' : 'theam2';
    return (
            <>
                <h1>Toggle Theam..</h1>
                <button onClick={handelToggle}>{theam === 'dark' ? ' Switch To Light Mode' : 'Switch To Dark Mode'}</button>
            </>
    )
}