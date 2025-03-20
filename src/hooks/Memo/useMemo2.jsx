import React from 'react'
import { useState, memo, useMemo } from 'react';


const ChildComponent = () => {
    // Expensive calculation that will run on every render
    const calculateExpensiveValue = () => {
        console.log("Expensive calculation running...");

        // Simulate expensive operation with a loop
        let result = 0;
        for (let i = 0; i < 10000; i++) {
            result += i;
            // Add some complex math to slow it down further
            if (i % 10000000 === 0) {
                result = Math.sqrt(result) * Math.sin(result);
            }
        }

        return result;
    };

    // This component will run on every render and slow down your component

    //Without useMemo below 
    // const expensiveValue = calculateExpensiveValue()

    //Benifit of useMemo 
    const expensiveValue = useMemo(() => {
        return calculateExpensiveValue();
    }, [])

    return (
        <>
            <h1>Expensive function renders </h1>
            <p>Calculated value: {expensiveValue.toFixed(2)}</p>
        </>
    );
};

export const UseMemo2 = () => {
    const obj = { name: "kp" }
    const [counter, setCounter] = useState(0);
    const handelCount = () => {
        return setCounter(() => counter + 1);
    }
    return (
        <div>
            <button onClick={handelCount}>
                Click Me {counter};
            </button>
            <ChildComponent value={obj} />
        </div>
    )
};