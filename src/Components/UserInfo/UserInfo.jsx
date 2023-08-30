import React from 'react';
function UserInfo(props) {
    return (
      <div className="UserInfo">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  }

export default UserInfo;