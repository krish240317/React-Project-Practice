import { useEffect,useState } from "react";

export const TodoDateTime=()=>{
    const [dateTime, SetDateTime] = useState("");
    useEffect(()=>{
        setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            SetDateTime(`${formatedDate} - ${formatedTime}`)
        }, 1000);
    },[])
    return (
        <>
        <h2 className='date-time'>{dateTime}</h2>
        </>
    )
}