const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/show", quizController.showQuiz);

router.post("/show-quiz", quizController.getQuizData);

module.exports = router;