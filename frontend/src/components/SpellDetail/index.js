// import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { deleteSpell } from "../../store/spells"
import './SpellDetail.css'


const SpellDetail = () => {
    const { spellId } = useParams()
    const spell = useSelector(state => state.spell[spellId])
    const dispatch = useDispatch()
    const history = useHistory()



    // const [title, setTitle] = useState(spell.title)
    // const [content, setContent] = useState(spell.content)
    const handleDeleteClick = () => {
        const confirmed = window.confirm('Are you sure you wish to delete this spell?')
        if (confirmed) {
            dispatch(deleteSpell(spell))
            history.push('/spells')
        }

    }


    return (
        <div className="spell-detail">
            <h2>{spell.title}</h2>
            <p>{spell.content}</p>
            <div className='spell-detail-footer'>
                <button className='edit-delete'>
                    Edit
                </button>
                <button onClick={handleDeleteClick} className='edit-delete'>
                    Delete
                </button>
            </div>
            {/* <div className="spell-form-container">
                <form className="create-spell-form" onSubmit={'handleSubmit'}>
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
                </form>
                </div> */}
        </div>
    )


}

export default SpellDetail
