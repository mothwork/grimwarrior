import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import './SpellDetail.css'


const SpellDetail = () => {
    const { spellId } = useParams()
    const spell = useSelector(state => state.spell[spellId])

    const [title, setTitle] = useState(spell.title)
    const [content, setContent] = useState(spell.content)



    return (
        <div className="spell-detail">
            <h2>{spell.title}</h2>
            <p>{spell.content}</p>
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
