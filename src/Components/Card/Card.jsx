import React from 'react';
import Avatar from '../Avatar/Avatar';
import UserInfo from '../UserInfo/UserInfo';
import './Card.css';

function Card(props) {
    return (
      <div className="Card">
        <Avatar 
          image={props.image}
          alt={props.name}/>
          <div className='cardName'>
            <UserInfo 
              title={props.name}
              description={props.description} />
          </div>
      </div>
    );
  }

export default Card;