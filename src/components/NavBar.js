import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div>
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>
      <NavLink
      to="/movie"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Movie</NavLink>
      <NavLink
      to="/directors"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >directors</NavLink>
      <NavLink
      to="/actors"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >actors</NavLink>


    </div>
  );
};

export default NavBar;
