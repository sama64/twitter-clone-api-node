const express = require('express');

const TweetService = require('./../services/Tweet.service.js');

const router = express.Router();
const service = new TweetService();

router.get('/', async (req, res) => {
    const { id } = req.params;
    tweets = await service.read();
    res.json(tweets);
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const tweet = await service.readOne(id);
        res.json(tweet);
    } catch (error) {
        //execute error middleware
        next(error);
    }
});

router.post('/create', async (req, res) => {
    const body = req.body;
    const newTweet = await service.create(body);
    res.status(201).json(newTweet);
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const changes = await service.update(id, body);
        res.status(201).json(changes);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
    const { id } = req.params;
    const message = await service.delete(id);
    res.status(204).json(message);
    } catch (error) {
        //execute error middleware
        next(error);
    }
});

module.exports = router;