
import React from 'react';


// Class, Container, Smart, and Stateful component
class Receiver extends React.Component{


    render(){

        const user = this.props.fullState;


        return(
            <div>
                <p>I am the Receiver { user.username }</p>
                <p>I am the Receiver of { user.age}</p>
                <p>I am the Receiver of { user.secondCount } ( - )</p>
                <p>I am the Receiver of </p>


            </div>
        );
    }
}




export default Receiver;