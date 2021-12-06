

const LOAD = 'spells/LOAD'
const ADD_ONE = 'spells/ADD_ONE'

const load = spellArray => ({
    type: LOAD,
    spellArray
})

const addOneSpell = spell => ({
    type: ADD_ONE,
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
    const res = await fetch('api/spells/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newSpell)
    })
    const spell = await res.json()
    if (res.ok) dispatch(addOneSpell(spell))
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
        case ADD_ONE:
            const spell = action.spell
            return {
                ...state, ...spell
            }
    }
}


export default spellReducer
