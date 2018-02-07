import SecretSantaForm from './components/SecretSantaForm.jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <SecretSantaForm />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
