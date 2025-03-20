import React, { useContext } from 'react'
import { BioContex } from '.'


export const Home = () => {
  const {myName,myAge}  = useContext(BioContex);
  return (
    <>
      <h1>Hello From Context API .My Name is {myName}. My Age is {myAge}</h1>
    </>
  )
}

