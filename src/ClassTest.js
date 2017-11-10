import React from 'react';

class ClassTest extends React.Component{

  render(){
    const data = this.props.fullState;

    return(

      <div>
        <p>I'm a data from classTest Component (His name is {data.username})</p>
      </div>
    );
  }
}

export default ClassTest;
