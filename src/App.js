import './App.css';
import React, { Component } from 'react';
import steve from './assets/steve.png'

class App extends Component {

  state = {
    person: {
      fullName: 'Pizzaaa Steeeve',
      bio: 'A one piece fan web developer',
      profession: 'Problem solving'
    },
    show: false,
    time: null
  }

  componentDidMount() {
    this.setState({ time: new Date() });
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }

  render() {
    const { person, show, time } = this.state;
    return (
      <div className='App'>
        <button onClick={this.toggleShow}>toggleShow</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={steve} alt={person.fullName} style={{height:'300px', width:'200px'}} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {time && time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
