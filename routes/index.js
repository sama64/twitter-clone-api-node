// const express = require('express');

const tweetRouter = require('./tweet.router.js');

function routerApi(app) {
    app.use('/tweet', tweetRouter);
}

module.exports = routerApi;
