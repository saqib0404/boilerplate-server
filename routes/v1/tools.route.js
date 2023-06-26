const express = require('express');
const toolsController = require('../../controllers/tools.controller');
const { viewCounter, limiter } = require('../../middleWare/middleWare');

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

router.route('/:id')
    .get(limiter,viewCounter, toolsController.getATool)


module.exports = router;