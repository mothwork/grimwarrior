const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const { Spell, User, Grimoire } = db
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req,res)=>{
    const userId = req.user.id
    const grimoires = await Grimoire.findAll({where: {userId}})
    return res.json(grimoires)
}))

router.post('/', restoreUser, asyncHandler(async (req,res)=>{
    const id = req.user.id

    const {
        name
    } = req.body
    //console.log('After destructure')
    const newGrimoire = await Grimoire.create({
        name: name,
        userId: id
    })
    res.json(newGrimoire)
    return res.redirect(`${req.baseUrl}`)
} ))

router.put('/:grimoireId', restoreUser, asyncHandler(async function (req,res){
    //const {spellId} = req.params
    const grimoire = req.body
    //onsole.log('Spell:',spell)
    const grimoireId = grimoire.id
    //console.log('spellid', spellId)
    const currGrimoire = await Grimoire.findByPk(grimoireId)
    currGrimoire.name = grimoire.name

    await currGrimoire.save()
    res.status = 200
    return res.json(currGrimoire)
}))

module.exports = router;
