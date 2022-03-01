import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
// import { getGrimoires } from '../../store/grimoires';

import { getSpells } from '../../store/spells';
// import CreateGrimoreForm from '../CreateGrimoireForm';
//import CreateSpellForm from '../CreateSpellForm';
// import GrimoireList from '../Grimoires';
// import GrimoireDetail from '../GrimoireDetail';
import SpellDetail from '../SpellDetail';
// import "./Spells.css"
import CreateSpellForm from '../CreateSpellForm';

const GrimoireSpellList = ({grimoireId}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpells())
    }, [dispatch])

    const spells = useSelector(state => {
        return state.spell
    })

    //

    // console.log(spells.spellList)

    if (!spells.spellList) { return null }

    const unfilteredSpellList = spells.spellList
    const spellList = unfilteredSpellList.filter(spell => {
            //console.log(spell.grimoireId,grimoireId)
             return spell.grimoireId === +grimoireId
        })
    if (spellList) {
        return (
            <>

            <div className='main-content'>
                {/* <GrimoireList /> */}

                <div className='button-container'>
                    {/* <CreateSpellForm /> */}
                    {/* <CreateGrimoreForm /> */}
                </div>
                <div className="spell-container">
                    <h1 className='header'>Spells</h1>
                    
                    {spellList.map(spell => {
                        return (

                            <NavLink key={spell.id} to={`/grimoires/${grimoireId}/spells/${spell.id}`}>
                                <div className={`spell-${spell.id} spell-card`}>
                                    <h2 className="spell-title">{spell.title}</h2>
                                    <p className='spell-content'>{spell.content}</p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
                <Route path='/grimoires/:grimoireId/spells/:spellId'>
                    <SpellDetail />
                </Route>

            </div>
            </>
        )
    }
}

export default GrimoireSpellList
