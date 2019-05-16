import React from 'react';
import './UserInput.css';


const UserInput = (props) => {


return(
  <div className = "UserInput">

    <input className="Input" onChange={props.changeUsername} value = {props.username} type="text" />

  </div>
)

};

export default UserInput;
