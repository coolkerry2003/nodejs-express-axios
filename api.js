const express = require("express");
const axios = require('axios');

let router = express.Router();

router.get('/data', (req, res) => {
    // 在這裡使用axios來發送HTTP請求
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  });

module.exports = router