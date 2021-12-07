import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route} from 'react-router-dom';

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

    // console.log(spells.spellList)

    if (!spells.spellList) { return null }

    const spellList = spells.spellList
    if (spellList) {
        return (
            <div className='main-content'>

                <CreateSpellForm />
                <div className="spell-container">
                <h1 className='header'>Spells</h1>
                    {spellList.map(spell => {
                        return (

                            <NavLink key={spell.id} to={`/spells/${spell.id}`}>
                                <div  className={`spell-${spell.id} spell-card`}>
                                    <h2 className="spell-title">{spell.title}</h2>
                                    <p className='spell-content'>{spell.content}</p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                <Route path='/spells/:spellId'>
                    <SpellDetail/>
                </Route>
            </div>
        )
    }
}

export default SpellList
