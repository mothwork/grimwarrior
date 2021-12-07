
import { csrfFetch } from "./csrf"

const LOAD = 'spells/LOAD'
const ADD_ONE = 'spells/ADD_ONE'
const DELETE_ONE = 'spells/DELETE_ONE'
const EDIT_ONE = 'spells/EDIT_ONE'

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

const editOneSpell = spell => ({
    type: EDIT_ONE,
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
    //console.log('inside delete spell 1')
    const res = await csrfFetch(`/api/spells/${spellToDelete.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spellToDelete)
    })
    const spell = await res.json()
    //console.log('inside delete spell 2')
    if (res.ok) dispatch(deleteOneSpell(spell))
}

export const editSpell = (spellToEdit) => async dispatch => {
    const res = await csrfFetch(`/api/spells/${spellToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spellToEdit)
    })
    const spell = await res.json()
    if (res.ok) dispatch(editOneSpell(spell))
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

            const spellList = state.spellList
            spellList.push(spell)
            const newState = {
                ...state, [spell.id]: spell
            }
            return newState
        }
        case DELETE_ONE:{
            //console.log('inside delete_one')
            //console.log('STATE:', state)
            const deleteSpell = action.spell;
            //console.log(deleteSpell)
            const spellList = state.spellList
            delete state[deleteSpell.id]
            let index;
            for (let i = 0; i < spellList.length; i++) {
                const spell = spellList[i];
                if (spell.id === deleteSpell.id){
                    index = i
                }

            }
            console.log(index)
            spellList.splice(index,1)
            const newState = {
                ...state
            }
            return newState
        }
        case EDIT_ONE:{
            const editedSpell = action.spell;
            const spellList = state.spellList;
            state[editedSpell.id] = editedSpell
            delete state[deleteSpell.id]
            let index;
            for (let i = 0; i < spellList.length; i++) {
                const spell = spellList[i];
                if (spell.id === editedSpell.id){
                    index = i
                }
            }
            spellList.splice(index, 1, editedSpell)
            const newState = {
                ...state
            }
            return newState
        }
    }
}


export default spellReducer
