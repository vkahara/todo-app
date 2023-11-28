const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

router.get("/notes", noteController.list); 
router.post("/notes/create", noteController.create); 
router.delete("/notes/:id", noteController.delete); 

module.exports = router;
