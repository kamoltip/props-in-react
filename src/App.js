import React, {Component} from 'react';

import Receiver from './Class';

import Testing from './Functional';

import ClassTest from './ClassTest';

import FunctionalTest from './FunctionalTest';

class App extends Component {

    constructor() {
        super();

        this.state = {
            username: 'accimeesterlin',
            age: 5,
            address: '9088 Terrace Club Drive',
            position: "Full Stack Developer",
            firstCount: 0,
            secondCount: 0,
            fourthCount: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.lastCount = this.lastCount.bind(this);
    }


    increment() {
        this.setState({firstCount: this.state.firstCount += 1})
    };

    decrement() {
        this.setState({secondCount: this.state.secondCount -= 1})
    };

    lastCount() {
        this.setState({fourthCount: this.state.fourthCount +=2})
    }

    render() {

        return (
            <div className="App">
                <h1>Hello World!!!</h1>

                <p>Username: {this.state.username} </p>
                <p>Age: {this.state.age} </p>
                <p>Address: {this.state.address} </p>
                <p>Couting: {this.state.firstCount} ( + ) </p>

                <Receiver fullState={this.state}/>

                <Testing third = { this.decrement } fullState = {this.state }/>
                <FunctionalTest fourth = {this.lastCount} fullState = {this.state}/>
                <ClassTest fullState={this.state} />
                <button onClick={this.increment}>Plus ( + )</button>
                <button onClick={this.decrement}>Minus ( - )</button>
            </div>
        );
    }
}

export default App;
