import React from 'react';

// Functional, Dumb, Presentational, and Stateless Component
const Testing = (props) => {


    // No State
    // No functions

    // console.log("First: ", props.first);
    // console.log("Second: ", props.second);


    return (
        <div>
            <h1> Username: </h1>
            <h1> Username: </h1>
            <h1> Count: {props.fullState.secondCount}</h1>

            <button onClick={ props.third }> Click me dear Props </button>
        </div>
    );

};

export default Testing;