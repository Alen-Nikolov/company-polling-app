const express = require('express');
const router = express.Router();
const mongodb = require('../model/mongo');

/* GET companies listing. */
router.post('/', (req, res) => {
  const body = req.body;
  mongodb.insert({
    employeeName: body.employeeName, companyId: body.companyId,
    experience: body.experience, lastPosition: body.lastPosition, salaryRange: body.salaryRange,
    responsibilities: body.responsibilities
  }).then((data) => {
    res.status(201).send('Your poll results were successfully saved!');
  });
});

module.exports = router;
