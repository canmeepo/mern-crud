const express = require('express');
const router = express.Router();
const mainController = require('./controlers/main')

module.exports = router;

router.get("/", mainController.home)