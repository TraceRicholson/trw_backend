var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/', function (req, res) {
  knex
    .select('*')
    .from('photos')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Not connecting to DB'
      })
    );
  console.log(`GET submitted`)
})

router.get('/nature', function (req, res) {
  knex
    .select('*')
    .from('photos')
    .where({category: 'nature'})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Not connecting to DB'
      })
    );
  console.log(`GET submitted`)
})



// router.post('/', function (req, res) {
//   console.log(`POST body: `, req.body)
//   knex('photos')
//     .insert({name: req.body.name})
//     .then(friend => res.status(200).json(friend))
// })

module.exports = router;
