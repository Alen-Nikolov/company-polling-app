const express = require('express');
const router = express.Router();
const postgredb = require('../model/postgre');

/* GET api listing. */
router.get('/:id', (req, res) => {
  postgredb.query(`select * from company_positions where company_id='${req.params.id}'`).then((result) => {
    res.send(result.rows);
  });
});

/* GET api listing. */
router.get('/', (req, res) => {
  postgredb.query('select * from companies').then((result) => {
    res.send(result.rows);
  });
});

module.exports = router;
