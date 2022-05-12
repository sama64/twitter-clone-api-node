const express = require('express');
const router = express.Router();

router.delete('/', (req, res) => {
    res.json({
        "message": "your shameful tweet was deleted"
    });
});

module.exports = router;