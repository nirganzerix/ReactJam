import NameTable from './NameTable.jsx'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import isEmpty from 'lodash/isEmpty'
import shuffle from 'lodash/shuffle'

class SecretSantaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameList: []
    };
  }

  moveName = (event) => {
    if (event.key === 'Enter' && !isEmpty(event.target.value)) {
      this.setState({ nameList: [...this.state.nameList, event.target.value] });
      event.target.value = "";
    }
  }

  shuffleThatShuffle = () => {
    this.setState({ nameList: shuffle(this.state.nameList)});
  }

  render() {
    const paperStyle = {
      height: '80%',
      width: '90%',
      margin: '2% 5%',
      textAlign: 'center',
      display: 'inline-block',
      position: 'relative'
    }

    return (
      <div id="background" >
        <Paper style={paperStyle} zDepth={5}>
          <h1>John and Monica's Secret Santa Fucking Amazing Application That Will Amaze Your Dad</h1>
          <TextField floatingLabelText="Enter A Name And Hit Enter" onKeyPress={(event) => this.moveName(event)} /><br />
          <RaisedButton label="Shuffle That Shuffle" disabled={this.state.nameList.length <= 1} onClick={this.shuffleThatShuffle} primary/>
          <NameTable nameList={this.state.nameList} />
        </Paper>
      </div>
    );
  }
}

export default SecretSantaForm;
