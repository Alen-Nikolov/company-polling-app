const express = require('express');
const router = express.Router();
const mongodb = require('../model/mongo');

/* GET companies listing. */
router.get('/', (req, res) => {
  mongodb.find({}).then((data) => {
    res.json(data);
  });
});

module.exports = router;
