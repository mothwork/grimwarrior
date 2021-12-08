
import { csrfFetch } from "./csrf";

const LOAD = 'grimoires/LOAD'
const ADD_ONE = 'grimoires/ADD_ONE'
const DELETE_ONE = 'grimoires/DELETE_ONE'
const EDIT_ONE = 'grimoires/EDIT_ONE'

const load = grimoireArray => ({
    type: LOAD,
    grimoireArray
})

const addOneGrimoire = grimoire => ({
    type: ADD_ONE,
    grimoire
})

const editOneGrimoire = grimoire => ({
    type: EDIT_ONE,
    grimoire
})

const deleteOneGrimoire = grimoire => ({
    type: DELETE_ONE,
    grimoire
})


export const getGrimoires = () => async dispatch => {
    const response = await fetch(`/api/grimoires`)

    if (response.ok) {
        const grimoireArray = await response.json()
        dispatch(load(grimoireArray))
    }
}

export const createGrimoire = (newGrimoire) => async dispatch => {
    console.log('before fetch')
    const res = await csrfFetch('/api/grimoires/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGrimoire)
    })
    const grimoire = await res.json()
    console.log(grimoire)
    if (res.ok) dispatch(addOneGrimoire(grimoire))
}

export const editGrimoire = (grimoireToEdit) => async dispatch => {
    const res = await csrfFetch(`/api/grimoires/${grimoireToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grimoireToEdit)
    })
    const grimoire = await res.json()
    if (res.ok) dispatch(editOneGrimoire(grimoire))
}

export const deleteGrimoire = (grimoireToDelete) => async dispatch => {
    //console.log('inside delete spell 1')
    const res = await csrfFetch(`/api/grimoires/${grimoireToDelete.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grimoireToDelete)
    })
    const grimoire = await res.json()
    //console.log('inside delete spell 2')
    if (res.ok) dispatch(deleteOneGrimoire(grimoire))
}

const initialState = {};

const grimoireReducer = (state = initialState, action)=>{
    switch(action.type) {
        default:
            return state
        case LOAD:
            const allGrimoires = {}
            //console.log(action.grimoireArray)
            action.grimoireArray.forEach(grimoire => {
                allGrimoires[grimoire.id] = grimoire
            });
            return {
                ...state, ...allGrimoires, grimoireList: action.grimoireArray
            }
        case ADD_ONE: {
            const grimoire = action.grimoire
            //console.log('GRIMOIRE',grimoire)
            const grimoireList = state.grimoireList
            //console.log('GRIMOIRELIST',grimoireList)
            grimoireList.push(grimoire)
            const newState = {
                ...state, [grimoire.id]: grimoire
            }
            console.log(newState)
            return newState;
        }
        case EDIT_ONE: {
            const editedGrimoire = action.grimoire
            const grimoireList = state.grimoireList
            state[editedGrimoire.id] = editedGrimoire
            let index;
            for (let i = 0; i < grimoireList.length; i++) {
                const grimoire = grimoireList[i];
                if (grimoire.id === editedGrimoire.id){
                    index = i
                }
            }
            grimoireList.splice(index, 1, editedGrimoire)
            const newState = {
                ...state
            }
            return newState
        }
        case DELETE_ONE:{
            //console.log('inside delete_one')
            //console.log('STATE:', state)
            const deleteGrimoire = action.grimoire;
            //console.log(deleteSpell)
            const grimoireList = state.grimoireList
            delete state[deleteGrimoire.id]
            let index;
            for (let i = 0; i < grimoireList.length; i++) {
                const grimoire = grimoireList[i];
                if (grimoire.id === deleteGrimoire.id){
                    index = i
                }

            }
            //console.log(index)
            grimoireList.splice(index,1)
            const newState = {
                ...state
            }
            return newState
        }
    }
}

export default grimoireReducer
