const express   = require("express");
const router    = express.Router();


router.get('/', (req, res) => {
    res.send("Hello From main route")
})

module.exports = router;
