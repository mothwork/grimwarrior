
import { csrfFetch } from "./csrf"

const LOAD = 'spells/LOAD'
const ADD_ONE = 'spells/ADD_ONE'
const DELETE_ONE = 'spells/DELETE_ONE'

const load = spellArray => ({
    type: LOAD,
    spellArray
})

const addOneSpell = spell => ({
    type: ADD_ONE,
    spell
})

const deleteOneSpell = spell => ({
    type: DELETE_ONE,
    spell
})

export const getSpells = () => async dispatch => {
    const response = await fetch(`/api/spells`)

    if (response.ok) {
        const spellArray = await response.json()
        dispatch(load(spellArray))
    }
}

export const createSpell = (newSpell) => async dispatch => {

    const res = await csrfFetch('/api/spells/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSpell)
    })
    const spell = await res.json()
    if (res.ok) dispatch(addOneSpell(spell))
}

export const deleteSpell = (spellToDelete) => async dispatch => {
    const res = await csrfFetch(`/api/spells/${spellToDelete.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spellToDelete)
    })
    console.log('inside delete spell')
    if (res.ok) dispatch(deleteOneSpell(spellToDelete))
}


const initialState = {}

const spellReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case LOAD:
            const allSpells = {}
            action.spellArray.forEach(spell => {
                allSpells[spell.id] = spell
            });
            return {
                ...state, ...allSpells, spellList: action.spellArray
            }
        case ADD_ONE:{
            const spell = action.spell
            console.log('STATE:', state)
            const spellList = state.spellList
            spellList.push(spell)
            const newState = {
                ...state, [spell.id]: spell
            }
            return newState
        }
        case DELETE_ONE:{
            console.log('inside delete one')
            const deleteSpell = action.spell;
            const spellList = state.spellList
            delete state[deleteSpell.id]
            let index = spellList.indexOf(deleteSpell)
            console.log(index)
            spellList.splice(index,1)
            const newState = {
                ...state
            }
            return newState
        }
    }
}


export default spellReducer
