exports.errorHandler = (err, req, res, next) => {
  if (err.status) res.status(err.status);
  else res.status(500);
  next(err);

  return res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? " " : err.stack,
  });
};
