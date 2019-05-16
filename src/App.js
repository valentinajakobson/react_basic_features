import React , {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    usernames: [
    {id: '1', username:"Batman"},
    {id: '2', username:"Catwoman"},
    {id: '3', username:"Spiderman"}
  ]
};


inputNameHandler = event => {
  this.setState({
    usernames: [
      {username:event.target.value},
      {username:"Catwoman"},
      {username:"Spiderman"}
  ]
  })
}

  render() {
    const pStyle = {
      color: 'blue',
      fontSize: '16px',
      fontFamily: 'Kodchasan',
    }

    let userOut = null;

      userOut = (
      <div>
        {this.state.usernames.map((u,index) => {
          return <UserOutput
          key = {u.id}
          username = {u.username}

          />;
        })}
      </div>
      )

  return (
    <div className="App" style={pStyle} >
      <UserInput changeUsername = {this.inputNameHandler} username = {this.state.usernames[0].username} />
    {userOut}
    </div>
  );
  }
}

export default App;
