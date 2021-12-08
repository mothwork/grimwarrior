const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const { Spell, User, Grimoire } = db
const { restoreUser } = require('../../utils/auth');


const router = express.Router();

//Get All spells
router.get('/', restoreUser, asyncHandler(async function (req, res) {
    const { user } = req;
    const userId = user.id
    const currUser = await User.findByPk(userId, { include: "Spells" })
    //const grimoires = await Grimoire.findAll({where: {userId}}) Grimoire test
    //console.log(grimoires)
    return res.json(currUser.Spells) //Returns Array in res
}))

//Create Spell
router.post('/', restoreUser, asyncHandler(async function (req, res) {
    const id = req.user.id

    const {
        title,
        content
    } = req.body

    

    const newSpell = await Spell.create({
        title,
        content,
        userId: id,
        grimoireId: id //TODO FIX THIS so it isnt hardcoded
    })
    ///console.log(newSpell.dataValues.id)
    return res.redirect(`${req.baseUrl}/${newSpell.dataValues.id}`)
}))

router.get('/:spellId', restoreUser, asyncHandler(async function (req, res) {
    const { spellId } = req.params;
    const currSpell = await Spell.findByPk(spellId)
    //console.log(currSpell)
    return res.json(currSpell)
}))

router.delete('/:spellId', restoreUser, asyncHandler(async function (req, res) {
    //const {spellId} = req.params
    const spell = req.body
    //onsole.log('Spell:',spell)
    const spellId = spell.id
    //console.log('spellid', spellId)
    const currSpell = await Spell.findByPk(spellId)
    await currSpell.destroy()
    res.status = 204
    return res.json(currSpell)
}))

router.put('/:spellId', restoreUser, asyncHandler(async function (req,res){
    //const {spellId} = req.params
    const spell = req.body
    //onsole.log('Spell:',spell)
    const spellId = spell.id
    //console.log('spellid', spellId)
    const currSpell = await Spell.findByPk(spellId)
    currSpell.title = spell.title
    currSpell.content = spell.content
    await currSpell.save()
    res.status = 200
    return res.json(currSpell)
}))

module.exports = router;
