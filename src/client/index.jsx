import AwesomeComponent from './components/AwesomeComponent.jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <p> Hello React!</p>
        <AwesomeComponent />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
