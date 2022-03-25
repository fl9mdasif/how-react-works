import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] =useState(0);
    const increaseSteps = () => {
        const newSteps = steps+1;
        setSteps(newSteps);

    }
    useEffect(()=>{
        console.log(steps)
    },[steps])
    return (
        <div style={{ border: '2px solid gray', margin:'20px'}}>
            <h2>This is xiaOmi k66 Smart Watch</h2>
            <h3>My current steps: {steps} </h3>
            <button onClick={increaseSteps}>De Dour</button>
            <Display Name="Asif" steps={steps}></Display>
        </div>
    );
};

export default Watch;