import React from 'react';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin:'20px'}}>
            <h2>Name{props.name}</h2>
            <h3>The count is:{props.steps} </h3>
        </div>
    );
};

export default Display;