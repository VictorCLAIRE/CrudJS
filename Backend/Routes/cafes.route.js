const mongoose = require('mongoose');

const express = require('express');

const router = express.Router();

const cafeController = require('../Controllers/cafes.contoller');

router.get('/', cafeController.baseRoute)

router.get('/cafes', cafeController.getCafes)

router.post('/ajouter-cafe', cafeController.createCafes)

module.exports = router;