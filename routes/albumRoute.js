const express = require('express');
const router = express();

const jsonPlaceholder = require('../apis/JsonPlaceholder' );

router.get('/albums/:id([0-9]+)?', async (req, res) =>{
  const {id} = req.params;

  try {
    const response = await jsonPlaceholder.get(`/${id}`);

    if (!response || !response.data) {
      return res.status(404).json({
        status: 'Failure', message: 'No data found!',
      });
    }

    const {title, url} = response.data;

    res.status(200).json({status: 'Success', album: {
      title,
      url,
    }});
  } catch (err) {
    res.status(400).json({status: 'Failure', error: err.message});
  }
}, errorHandler);

module.exports= router;
