const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models')
const {Spell, User, Grimoire } = db



const router = express.Router();


router.get('/', asyncHandler(async function(req, res){
    //const { user } = req;
    //const userId = user.id
    const userId = 1
    const currUser = await User.findByPk(userId, {include: "Spells"})
    console.log(currUser)
    return res.json(currUser.Spells) //Returns Array in res
}))

module.exports = router;
