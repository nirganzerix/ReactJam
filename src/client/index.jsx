import AwesomeComponent from './components/AwesomeComponent.jsx';
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
