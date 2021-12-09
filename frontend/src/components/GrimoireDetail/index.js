import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { deleteGrimoire, editGrimoire } from "../../store/grimoires"
import GrimoireList from "../Grimoires"

import './GrimoireDetail.css'

const GrimoireDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { grimoireId } = useParams()

    const grimoire = useSelector(state => state.grimoire[grimoireId])

    const [showEditForm, setShowEditForm] = useState(false)
    const [name, setName] = useState(grimoire.name)

    useEffect(() => {
        setName(grimoire.name)
    }, [grimoire.name])

    const handleDeleteClick = () => {
        const confirmed = window.confirm('Are you sure you wish to delete this Grimoire? \n\nAll of the spells contained within the deleted grimoire will be sent to your Spell Workbook.')
        if (confirmed) {
            dispatch(deleteGrimoire(grimoire))
            history.push('/spells')
        }

    }

    const openForm = () => {
        if (showEditForm) return;
        setShowEditForm(true)
    }
    const closeForm = () => {
        setShowEditForm(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const editedGrimoire = {
            ...grimoire
        }
        editedGrimoire.name = name

        if (editedGrimoire) {
            dispatch(editGrimoire(editedGrimoire))
            reset()
            closeForm()
            history.push('/spells')
        }
    }
    const reset = () => {
        setName('')
    }

    const handleBack = async (e) => {
        e.preventDefault();
        history.push('/spells')
    }

    return (
        <div className="grimoire-detail-container">
            <GrimoireList/>
            <div className='selected-grimoire'>
            {!showEditForm && (
                <div className="grimoire-detail">
                    <button className='backarrow' onClick={handleBack}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
                    <h1>
                        {grimoire.name}</h1>
                    <p>spells will go here</p>
                </div>
            )}

            {showEditForm && (
                <div className="spell-form-container">
                    <form className="create-spell-form" onSubmit={handleSubmit}>
                        <input
                            className='edit-spell-textarea'
                            name='name'
                            type='text'
                            placeholder='Enter a Grimoire Title'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>

                        <button className='edit-delete' type='submit'>Update Grimoire Name</button>


                    </form>
                </div>
            )}

            <div className='spell-detail-footer'>

                <button onClick={!showEditForm ? openForm : closeForm} className='edit-delete'>
                    {!showEditForm ? 'Edit' : 'Cancel'}
                </button>
                {!grimoire.isDefault && (<button onClick={handleDeleteClick} className='edit-delete'>
                    Delete
                </button>) }

            </div>
            </div>
        </div>
    )

}

export default GrimoireDetail
