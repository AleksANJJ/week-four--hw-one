import './App.css';
import { Component } from 'react';
import Tomato from './Tomato';
import Avocado from './Avocado';

class App extends Component {
  render() {
    return (
      <div>
        <Tomato/>,
        <Avocado/>
      </div>
    )
  }

}

export default App;

