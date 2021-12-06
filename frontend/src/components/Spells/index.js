import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getSpells } from '../../store/spells';


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
            <div className="spell-container">
                <h1>Spells</h1>
                {spellList.map(spell => {
                    return (
                        <div className={`spell-${spell.id}`}>
                            <h2>{spell.title}</h2>
                            <p>{spell.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SpellList
