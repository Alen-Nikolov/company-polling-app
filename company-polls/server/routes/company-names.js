const express = require('express');
const router = express.Router();
const postgredb = require('../model/postgre');

/* GET api listing. */
router.get('/', (req, res) => {
  postgredb.query('select * from companies').then((result) => {
    res.send(result.rows);
  });
});

module.exports = router;
