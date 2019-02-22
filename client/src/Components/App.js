import React from 'react';
import '../Style/App.css';
import Paths from './Routes/Paths';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Paths />
      </div>    
    );
  }
}


export default App;
