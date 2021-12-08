// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUserButton from '../DemoUser';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <DemoUserButton/>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <h2>GrimWarrior</h2>
      <ul className='nav-bar'>
        <li>
          <NavLink to="/spells">
            Spells
          </NavLink>
        </li>
        {isLoaded && sessionLinks}

      </ul>
    </div>
  );
}

export default Navigation;
