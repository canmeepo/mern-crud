const express = require('express');
const router = express.Router();
const itemsController = require('./controllers/items.controller')

module.exports = router;
router.get("/items", itemsController.getAll)
router.post("/items", itemsController.create)
router.delete("/items/:id", itemsController.remove)
router.patch("/items/:id", itemsController.update)