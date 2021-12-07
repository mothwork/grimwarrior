import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink, Route, useParams } from 'react-router-dom';

import { createSpell } from '../../store/spells';

const CreateSpellForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newSpell = {
            title,
            content
        }

        if (newSpell) {
            dispatch(createSpell(newSpell))
            history.push(`/spells/${newSpell.id}`)
        }
    }
    return (
        <div className="spell-form-container">
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
                <button type='submit'>Record Spell in Grimoire</button>

            </form>
        </div>
    )
}

export default CreateSpellForm;
