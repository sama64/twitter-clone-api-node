const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const { tweet } = req.body;
    if (tweet) {
        res.json({
            "message": "tweet created succesfully",
            tweet,
        });
    } else {
        res.json({
            "message": "a text is required",
        });
    }
});

module.exports = router;