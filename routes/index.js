// const express = require('express');

const createTweetRouter = require('./createTweet.router.js');
const readTweetRouter = require('./readTweetRouter.router.js');
const deleteTweetRouter = require('./deleteTweetRouter.router');

function routerApi(app) {
    app.use('/tweet/create', createTweetRouter);
    app.use('/tweet/:id', readTweetRouter);
    app.use('/tweet/:id/delete', deleteTweetRouter);
}

module.exports = routerApi;
