const { CustomError } = require('../errors/customError');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  res.status(500).json({
    status: 'fail',
    message: 'Something went wrong!',
  });
};

module.exports = errorHandler;
