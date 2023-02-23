const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/verifyToken')


router.post('/login', (req, res) => {

    const { username, password } = req.body

    const payload = { id: '63887dfc2a999a808f67a8ea', username, role: 'USER' }
    const secret = 'my-32-character-ultra-secure-and-ultra-long-secret'

    const authToken = jwt.sign(
        payload,
        secret,
        { algorithm: 'HS256', expiresIn: "2h" }
    )

    username === 'german' && password === 'garaje' ? res.json({ authToken }) : res.sendStatus(403)
})


router.get('/verify', verifyToken, (req, res) => {
    res.json(req.payload)
})


module.exports = router