import React, { createContext } from 'react'

export const BioContex = createContext();

export const BioProvider = ({ children }) => {
    const myName = "Krish"
    const myAge = 18
    return (
        <>
            <BioContex.Provider value={{myName,myAge}}>
                {children}
            </BioContex.Provider>
        </>
    )
}
