import React from 'react';
import { NavLink } from 'react-router-dom';

let link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class NavBar extends React.Component  {


  render(){

    return (
      <div className='navbar'>
        <NavLink 
        to='/'
        exact
        style={link}
        activeStyle={{background: 'darkred'}}
        >Home</NavLink>
        <NavLink
        to='/movies'
        exact
        style={link}
        activeStyle={{background: 'darkred'}}
        >Movies</NavLink>
        <NavLink
        to='/directors'
        exact
        style={link}
        activeStyle={{background: 'darkred'}}
        >Directors</NavLink>
        <NavLink
        to='/actors'
        exact
        style={link}
        activeStyle={{background: 'darkred'}}
        >Actors</NavLink>
      </div>
    );
  }
};

export default NavBar;
