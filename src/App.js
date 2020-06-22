import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'hossam' ,age:'28'},
      {name:'sherif' ,age:'36'},
      {name:'ahmed' ,age:'39'}
    ]
  }

  changeNameHandler = () => {
    // console.log("was clicked");
    // Dont Do This this.state.persons[0].name = "Hossam Khalil";
    this.setState({
      persons: [
        {name:'hossam Khalil' ,age:'28'},
        {name:'sherif' ,age:'36'},
        {name:'ahmed' ,age:'38'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Iam react app</h1>
        <p>This is really working!</p>
        <button onClick={this.changeNameHandler}>Submit</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Engineering</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
