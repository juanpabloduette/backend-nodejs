const express = require('express');
const router = express.Router();
const data = require('../api/api.json')

router.get('/products',(req,res) => {
    res.json(data)
})

module.exports = router
