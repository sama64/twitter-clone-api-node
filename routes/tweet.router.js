const express = require('express');

const TweetService = require('./../services/Tweet.service.js');

const router = express.Router();
const service = new TweetService();

router.get('/', (req, res) => {
    const { id } = req.params;
    tweets = service.read();
    res.json(tweets);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const tweet = service.readOne(id);
    res.json(tweet);
});

router.post('/create', (req, res) => {
    const body = req.body;
    const newTweet = service.create(body);
    res.status(201).json(newTweet);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const changes = service.update(id, body);
    res.status(201).json(changes);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const message = service.delete(id);
    res.status(204).json(message);
});

module.exports = router;