import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { NavLink, Route, useParams } from 'react-router-dom';
import './CreateSpell.css'
import { createSpell } from '../../store/spells';

const CreateSpellForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showForm, setShowForm] = useState(false)
    let [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const reset = () => {
        setTitle('')
        setContent('')
    }

    const openForm = () => {
        if (showForm) return;
        setShowForm(true)
    }


    useEffect(() => {
        if (!showForm) return;

        // const closeForm = () => {
        //     setShowForm(false)
        // }
        //document.addEventListener('click', closeForm)
        //return () => document.removeEventListener("click", closeForm);
    }, [showForm])

    const closeForm = () => {
        setShowForm(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //console.log('TITLE:', title.length)
        if (title.length === 0){
            //console.log('inside condtional')
            setTitle('New Spell')
            let now = new Date()

            title = 'New Spell Created: '+now.toDateString()        }

        const newSpell = {
            title,
            content
        }

        if (newSpell) {
            dispatch(createSpell(newSpell))

            reset()
            closeForm()
            history.push(`/spells/`)
        }

    }


    return (
        <>
            {showForm && (
                <div className="spell-form-container">
                    <h1>New Spell</h1>
                    <form className="create-spell-form" onSubmit={handleSubmit}>
                        <input
                            name='title'
                            type='text'
                            placeholder='Enter a Spell Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </input>
                        <textarea
                            name="content"
                            placeholder='Begin the work of trascribing the deepest mysteries...'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            cols={50}
                            rows={10}

                        ></textarea>
                        <button className='confirm-add' type='submit'>Create New Spell</button>

                    </form>
                </div>
            )}
            <button className={!showForm?'add-spell-button':'cancel-add-spell'} onClick={!showForm?openForm:closeForm}>
                {!showForm?'New Spell':'Cancel New Spell'}
            </button>
        </>
    )
}

export default CreateSpellForm;
