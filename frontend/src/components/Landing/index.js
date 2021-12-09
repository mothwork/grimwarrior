import { NavLink, Link } from 'react-router-dom'
import { signup } from '../../store/session'
import './Landing.css'

const landing = () => {
    return (
        <div className="landing-container">
            <div className='welcome'>

                <h2>Welcome to <span className='intro'>GrimWarrior</span></h2>

                <p>The premier tool for Grimoire Managment™ </p>
                <div>
                    <NavLink to='/login'>
                        <button className='landing-button'>Login</button>
                    </NavLink>
                    <NavLink to='/signup'>
                        <button className='landing-button'>Sign Up</button>
                    </NavLink>
                </div>

            </div>

        </div>
    )
}

export default landing
