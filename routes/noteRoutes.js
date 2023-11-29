const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

router.get("/notes", noteController.list); 
router.post("/notes/create", noteController.create); 
router.post("/notes/delete/:id", noteController.delete);
router.post("/notes/update/:id", noteController.update);

module.exports = router;
