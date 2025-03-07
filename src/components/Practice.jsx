import { useState } from "react"

const arr=[
    {
        name:"Alice",
        age:18
    },
    {
        name:"Krish",
        age:21
    },
    {
        name:"Bob",
        age:38
    },
    {
        name:"Alice",
        age:28
    },
    {
        name:"Cod",
        age:18
    }
]

export const Practice=()=>{

    const [user,setuser]=useState(arr);
    return(
        <>
        <h2>Practice</h2>
        {/* <ul>
            {arr.map((currele,index)=>{
                return(
                    <li key={index}>
                    <p>Name: {currele.name} </p> 
                    <p>Age: {currele.age} </p> 
                    </li>
                )
            })}
        </ul> */}


        
        </>
    )
}