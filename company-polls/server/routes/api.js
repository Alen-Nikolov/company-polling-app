const express = require('express');
const router = express.Router();
const mongodb = require('../model/mongo');

/* GET companies listing. */
router.post('/', (req, res) => {
  const body = req.body;
  mongodb.insert({
    employeeName: body.employeeName, companyId: body.companyId,
    experience: body.experience, lastPosition: body.lastPosition, salaryRange: body.salaryRange,
    responsibilities: body.responsibilities, companyPositionId: body.companyPositionId
  }).then((data) => {
    res.status(201).send({message: 'Вашите анкетни резултати бяха записани!'});
  });
});

module.exports = router;
