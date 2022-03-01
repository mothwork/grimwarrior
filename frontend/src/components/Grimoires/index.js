import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route} from 'react-router-dom';
import CreateGrimoreForm from '../CreateGrimoireForm';

import {getGrimoires} from '../../store/grimoires'
import './Grimoires.css'

const GrimoireList = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getGrimoires())
    }, [dispatch])

    const grimoires = useSelector(state => {
        return state.grimoire
    })

    const grimoireList = grimoires.grimoireList
    if (grimoireList) {
        return (
            <div className='grimoires-container'>
                <h1>All Grimoires</h1>
                <CreateGrimoreForm/>
                {grimoireList.map(grimoire => {
                    return (
                        <NavLink key={grimoire.id} to={`/grimoires/${grimoire.id}`}>
                            <div className='grimoire-card'>
                                <i class="fas fa-book"></i>
                                <h2 className='grimoire-title'>{grimoire.name}</h2>
                            </div>
                        </NavLink>
                    )
                })}
            </div>

        )
    }
    return (<p>No grimoires :(</p>)

}

export default GrimoireList
