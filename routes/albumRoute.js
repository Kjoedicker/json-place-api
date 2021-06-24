const express = require('express');
const router = express();

const albumCtrl = require('../controllers/albumCtrl');
const {albumCache} = require('../db/cache');

router.get('/albums/:id([0-9]+)?', async (req, res) =>{
  const {id} = req.params;

  try {
    let album = albumCache.get(id);

    if (!album) {
      album = await albumCtrl.getOne(id);

      if (!album) {
        return res.status(404).json({
          status: 'Failure',
          message: 'Album not found!',
        });
      }
    }

    res.status(200).json({status: 'Success', album});
  } catch (err) {
    res.status(400).json({status: 'Failure', error: err.message});
  }
});

module.exports= router;
