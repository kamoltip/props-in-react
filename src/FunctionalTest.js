import React from 'react';

const FunctionalTest = (props) => {

  return(
    <div>
      <br/>
      <button onClick={props.fourth}><h2>DOUBLE COUNT <br/> {props.fullState.fourthCount}</h2></button>
    </div>
  );
};

export default FunctionalTest;
