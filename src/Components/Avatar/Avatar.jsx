import React from 'react';
import './Avatar.css';

function Avatar(props) {
    return (
      <img
        className="avatar"
        src={props.image}
        alt={props.name}
      />
    );
  }

  export default Avatar;