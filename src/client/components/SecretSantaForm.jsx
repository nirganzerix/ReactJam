import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import shuffle from 'lodash/shuffle'

class SecretSantaForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: []};
    this.moveName = this.moveName.bind(this);
  }

  moveName(event) {
    if(event.key === 'Enter'){
      this.setState({text: [...this.state.text, event.target.value]});
      event.target.value = "";
    }
  }

  shuffleThatShuffle = () => {
    this.setState({text: shuffle(this.state.text)});
  }

  render() {
    const style = {
      height: '80%',
      width: '90%',
      margin: '2% 5%',
      textAlign: 'center',
      display: 'inline-block',
      position: 'relative'
    }

    return (
      <div style={{backgroundColor: 'black', height: 800}}>
        <Paper style={style} zDepth={5}>
          <h1>John and Monica's Secret Santa Fucking Amazing Application That Will Amaze Your Dad</h1>
          <TextField floatingLabelText="Enter A Name And Hit Enter" onKeyPress={(event) => this.moveName(event)} /><br />
          <RaisedButton label="Shuffle That Shuffle" disabled={this.state.text.length <= 1} onClick={this.shuffleThatShuffle}/>
          <div>
            {
              this.state.text.map(
                (name, index, array) => {return <h5 key={name}>{`${name}     ${array[index+1] || array[0]}`}</h5>}
                )
            }
          </div>
        </Paper>
      </div>
    );
  }
}

export default SecretSantaForm;
