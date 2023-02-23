const express = require('express')
const router = express.Router()

const Coaster = require('./../models/Coaster.model')

router.get('/', (req, res) => {

    Coaster
        .find()
        .then(allCoasters => res.json(allCoasters))
})


router.get('/details/:coaster_id', (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))
})

module.exports = router