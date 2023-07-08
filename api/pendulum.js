const express = require("express");
const pendulumRouter = express.Router();
const {
    createPendulumAnswer,
    getPendulumAnswerById,
    getAllPendulumAnswers
} = require("../db");
const { requireAdmin } = require("./utils");

pendulumRouter.get("/", async (req, res, next) => {
    try {
        const allPendulumAnswers = await getAllPendulumAnswers();
        res.send(allPendulumAnswers);
    } catch (error) {
        next(error);
    }
});

pendulumRouter.get("/:id", async (req, res, next) => {
    try {
        const pendulumId = await getPendulumAnswerById(req.params.id);
        res.send(pendulumId);
    } catch (error) {
        next(error);
    }
});

pendulumRouter.post("/", requireAdmin, async (req, res, next) => {
    const { pendulumImage, answer } = req.body;

    try {
        const newPendulum = await createPendulumAnswer({ pendulumImage, answer });
        res.send(newPendulum);
    } catch (error) {
        next(error);
    }
});

module.exports = pendulumRouter;