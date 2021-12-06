const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const {Spell, User, Grimoire } = db
const { setTokenCookie, restoreUser } = require('../../utils/auth');


const router = express.Router();

//Get All spells
router.get('/', restoreUser, asyncHandler(async function(req, res){
    const { user } = req;
    const userId = user.id
    const currUser = await User.findByPk(userId, {include: "Spells"})
    //console.log(currUser)
    return res.json(currUser.Spells) //Returns Array in res
}))

//Create Spell
router.post('/', restoreUser, asyncHandler(async function (req,res) {
    const id = await Spell.create(req.body)
    return res.redirect(`${req.baseUrl}/${id}`)
}))

module.exports = router;
