const CustomError = require('../errors/customError');

const errorHandler = async (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res
        .status(error.statusCode)
        .send({status: 'Failure', errors: error.serializeErrors()});
  }

  res.status(400).send({
    status: 'Failure',
    message: error.message,
  });
};

module.exports = errorHandler;
