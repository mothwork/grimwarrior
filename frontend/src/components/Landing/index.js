import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
//import { signup } from '../../store/session'
import './Landing.css'

const Landing = () => {

    const user = useSelector(state => { return state.session.user })
    console.log(user)
    useEffect(()=>{},[])
    const login = (
        <>
            <NavLink to='/login'>
                <button className='landing-button'>Login</button>
            </NavLink>
            <NavLink to='/signup'>
                <button className='landing-button'>Sign Up</button>
            </NavLink>
        </>
    )
    const nav = (
        <>
            <NavLink to='/spells'>
                <button className='landing-button'>Spells</button>
            </NavLink>
            <NavLink to='/grimoires'>
                <button className='landing-button'>Grimoires</button>
            </NavLink>
        </>
    )

    return (
        <div className="landing-container">
            <div className='welcome'>

                <h2>Welcome to <span className='intro'>GrimWarrior</span></h2>

                <p>The premier tool for Grimoire Managment™ </p>
                <div>
                    {!user ?login:nav}

                </div>

            </div>

        </div>
    )
}

export default Landing
