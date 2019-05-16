import React from 'react';
import './UserOutput.css';


const UserOutput = (props) => {


return(
  <div className = "UserOutput">
    <p>Username:{props.username}</p>
    <p> Superheroes have their antecedents in the semidivine heroes of myth and legend</p>

  </div>
)

};

export default UserOutput;
