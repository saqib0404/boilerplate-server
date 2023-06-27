const express = require('express');
const toolsController = require('../../controllers/tools.controller');
const { viewCounter, limiter } = require('../../middleWare/middleWare');

const router = express.Router();

router.route('/')
    .get(toolsController.getAllTools)
    .post(toolsController.postATool)

router.route('/:id')
    .get(limiter, viewCounter, toolsController.getATool)
    .patch(toolsController.updateATool)
    .delete(toolsController.deleteATool)


module.exports = router;