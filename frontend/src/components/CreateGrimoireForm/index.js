import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import grimoire from '../../../../backend/db/models/grimoire';

import { createGrimoire } from '../../store/grimoires';

const CreateGrimoreForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState('')
    

    const reset = () => {
        setName('')
    }

    const openForm = () => {
        if (showForm) return;
        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newGrimoire = {
            name
        }

        if (newGrimoire) {
            dispatch(createGrimoire(newGrimoire))
            reset()
            closeForm()
            history.push(`/spells/`)
        }
    }
    return (
        <>
            {showForm && (
                <div className="spell-form-container">
                    <h1>New Grimoire</h1>
                    <form className="create-spell-form" onSubmit={handleSubmit}>
                        <input
                            name='title'
                            type='text'
                            placeholder='Enter a Grimoire Title'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </input>
                        <button disabled={!name.length?true:false}
                        type='submit'>Begin new Grimoire</button>
                    </form>
                </div>
            )}
            <button className='add-spell-button' onClick={!showForm ? openForm : closeForm}>
                {!showForm ? 'New Grimoire' : 'Cancel New Grimoire'}
            </button>
        </>
    )

}

export default CreateGrimoreForm
