const axios = require('axios');

const jsonPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/photos/',
});

module.exports = jsonPlaceholder;
