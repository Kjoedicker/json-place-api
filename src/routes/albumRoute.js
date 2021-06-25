// eslint-ignore
const express = require('express');
const router = express();

const albumCtrl = require('../controllers/albumCtrl');
const {albumCache} = require('../db/cache');

const CustomError = require('../errors/customError');

// @route GET /albums/:id
// @desc fetch album data by id
router.get('/albums/:id([0-9]+)?', async (req, res, next) =>{
  const {id} = req.params;
  try {
    let album = albumCache.get(id);

    if (!album) {
      album = await albumCtrl.getOne(id);

      if (!album) {
        next(new CustomError(404, 'Album not found'));
      }
    }

    res.status(200).json({status: 'Success', album});
  } catch (err) {
    next(new CustomError(400, err.message));
  }
});

module.exports = router;
