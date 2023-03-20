const { db_pool } = require("./Pool");

exports.query = (queryText, queryParams) => {
  return new Promise((resolve, reject) => {
    db_pool
      .query(queryText, queryParams)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
