// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUserButton from '../DemoUser';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li>
          <NavLink to="/spells">
            <button>Home</button>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/grimoires">
            <button>Grimoires</button>
          </NavLink>
        </li> */}
        <ProfileButton user={sessionUser} />

        <div className='link-div'>Built by Brett Hageft
        <a href='https://github.com/mothwork/'><button>Github</button></a>
        <a href='https://linkedin.com/in/mothwork'><button>LinkedIn</button></a>
        </div>



      </>
    );
  } else {
    sessionLinks = (
      <>
        <li>
          <DemoUserButton />
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

      <ul className='links'>
        {/* <li>
          <NavLink to="/spells">
            <button>Spells</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/grimoires">
            <button>Grimoires</button>
          </NavLink>
        </li> */}
        {isLoaded && sessionLinks}

      </ul>
      <NavLink to='/'>
        <h2>GrimWarrior</h2>
      </NavLink>
    </div>
  );
}

export default Navigation;
