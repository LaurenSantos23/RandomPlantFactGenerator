import React, { Component } from 'react';
import './App.css';
import { facts } from './plantFacts.json';
import PlantFact from './components/PlantFact.jsx';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
    fact: "Click the button to generate a random Plant Fact!"
  }
 }

 generateFact() {
   let fact = facts[Math.floor(Math.random()*facts.length)];
   this.setState({fact: fact});
 }

  render() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Plant Fact Generator</h1>
        <button onClick={()=> this.generateFact()}>Generate</button>
      </div>
      <p className="App-intro">
        <PlantFact fact={this.state.fact} />
      </p>
      </div>
    );
  }
}

export default App;
