const express = require("express");
const router = express.Router();

const GameController = require('../controllers/game');

router.post("/game/add", GameController.game_add);
router.post("/game/update", GameController.game_update);
router.post("/game/delete", GameController.game_delete);
router.get('/books', GameController.books)
router.get('/books/:id', GameController.books_id)

module.exports = router;