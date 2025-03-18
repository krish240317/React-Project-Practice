import React, { createContext } from 'react'

export const BioContex = createContext();

export const BioProvider = ({ children }) => {
    const myName = "Krish"
    return (
        <>
            <BioContex.Provider value={myName}>
                {children}
            </BioContex.Provider>
        </>
    )
}
