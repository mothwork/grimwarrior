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




module.exports = router;
