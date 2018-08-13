const express = require('express');
const router = express.Router();
const mongodb = require('../model/mongo');

/* GET companies listing. */
router.post('/', (req, res) => {
  mongodb.insert({employeeName: req.body.employeeName, companyId: req.body.companyId, experience: req.body.experience}).then((data) => {
    res.status(201).send('Your poll results were successfully saved!');
  });
});

module.exports = router;
