const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        "tweet": "this was the cool tweet you were looking for",
    });
});

module.exports = router;