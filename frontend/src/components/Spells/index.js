import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getSpells } from '../../store/spells';
import CreateSpellForm from '../CreateSpellForm';
import SpellDetail from '../SpellDetail';
import "./Spells.css"

const SpellList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpells())
    }, [dispatch])

    const spells = useSelector(state => {
        return state.spell
    })

    console.log(spells.spellList)



    if (!spells.spellList) { return null }

    const spellList = spells.spellList
    if (spellList) {
        return (
            <>
                <CreateSpellForm />
                <h1>Spells</h1>
                <div className="spell-container">
                    {spellList.map(spell => {
                        return (

                            <NavLink key={spell.id} to={`/spell/${spell.id}`}>
                                <div  className={`spell-${spell.id} spell-card`}>
                                    <h2 className="spell-title">{spell.title}</h2>
                                    <p className='spell-content'>{spell.content}</p>
                                </div>
                            </NavLink>


                        )
                    })}
                </div>
                <Route to='/spells/:id'>
                    <SpellDetail/>
                </Route>
            </>
        )
    }
}

export default SpellList
