const express = require('express');
const toolsController = require('../../controllers/tools.controller');

const router = express.Router();
/* 
router.get('/', (req, res) => {
    res.send("All tools found");
})

router.post('/', (req, res) => {
    res.send("toll posted");
})
 */

router.route('/')
    .get(toolsController.getAllTools)
    .post(toolsController.postATool)


module.exports = router;