import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  //return JSX
  return (
    <li className="user">
      <p>Username: {props.user.username}</p>
      <p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
    </li>
  );
};

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
