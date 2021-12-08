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
    //console.log("After DB create")
    return res.redirect(`${req.baseUrl}`)
} ))

module.exports = router;
