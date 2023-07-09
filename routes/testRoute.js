const express = require('express');
// const tourController = require('./../controllers/tourController');
const testController = require('../controllers/testController');

const router = express.Router();

// router.param('id', tourController.checkID)

router
  .route('/')
  .get(testController.getAllTours)
  .post(testController.createTour);

router
  .route('/:id')
  .get(testController.getTour)
  .patch(testController.updateTour)
  .delete(testController.deleteTour);

module.exports = router;
