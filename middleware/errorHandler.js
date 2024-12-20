const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).json({
    message: err.message
  });
};

export default errorHandler;
