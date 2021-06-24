const jsonPlaceholder = require('../apis/JsonPlaceholder' );
const {albumCache} = require('../db/cache');

module.exports = {
  getOne: async (id) => {
    const response = await jsonPlaceholder.get(`/${id}`);

    if (!response || !response.data) {
      return null;
    }

    const {title, url} = response.data;

    album = {
      title,
      url,
    };

    albumCache.set( id, album, 60);

    return album;
  },
};
