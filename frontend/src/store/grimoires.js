
import { csrfFetch } from "./csrf";

const LOAD = 'grimoires/LOAD'
const ADD_ONE = 'grimoires/ADD_ONE'
const DELETE_ONE = 'grimoires/DELETE_ONE'
const EDIT_ONE = 'grimoires/EDIT_ONE'

const load = grimoireArray => ({
    type: LOAD,
    grimoireArray
})


export const getGrimoires = () => async dispatch => {
    const response = await fetch(`/api/grimoires`)

    if (response.ok) {
        const grimoireArray = await response.json()
        dispatch(load(grimoireArray))
    }
}

const initialState = {};

const grimoireReducer = (state = initialState, action)=>{
    switch(action.type) {
        default:
            return state
        case LOAD:
            const allGrimoires = {}
            console.log(action.grimoireArray)
            action.grimoireArray.forEach(grimoire => {
                allGrimoires[grimoire.id] = grimoire
            });
            return {
                ...state, ...allGrimoires, grimoireList: action.grimoireArray
            }
    }
}

export default grimoireReducer
