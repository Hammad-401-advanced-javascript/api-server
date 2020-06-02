'use strict';

module.exports = (req, res, next) => {
  console.log('logger request is =>', req.method, req.path,req.requestTime);
  next();
};