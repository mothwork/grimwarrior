import { signup } from '../../store/session'
import './Landing.css'

const landing = () => {
    return (
        <div className="landing-container">
            <div className='welcome'>

                <h2>Welcome to <span className='intro'>GrimWarrior</span></h2>

                <p>The premier tool for Grimoire Managment™ </p>
                <button className='edit-delete'>Login</button>
                <button className='edit-delete'>Sign Up</button>
            </div>

        </div>
    )
}

export default landing
