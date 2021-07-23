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

router.get('/urban', function (req, res) {
  knex
    .select('*')
    .from('photos')
    .where({category: 'urban'})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Not connecting to DB'
      })
    );
  console.log(`GET submitted`)
})

router.get('/live', function (req, res) {
  knex
    .select('*')
    .from('photos')
    .where({category: 'live'})
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Not connecting to DB'
      })
    );
  console.log(`GET submitted`)
})



router.post('/', function (req, res) {
  console.log(`POST body: `, req.body)
  knex('photos')
    .insert(
      {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        metadata: req.body.metadata,
        image_url: req.body.image_url
        },
      )
    .then(photo => res.status(201).json(photo))
})

router.delete('/', async (req, res) => {

  knex('photos')
  .where('title', req.body.title)
      .del()
      .then(data => res.status(410).send('Photo has been removed from the database.'))
      .catch(err => res.status(500) && console.log(err))
      res.end
})

module.exports = router;
