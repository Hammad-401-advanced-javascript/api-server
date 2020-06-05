'use strict';

/**
 * (Middleware) set the response status to 500 and send an error
 * @module 500
 */

/**
  * Input 
  * @param req - request
  * @param rse  - rseponse
  * @param next
  */




module.exports = (err,req, res, next) => {
  res.status(500);
  res.statusMessage='Server Error';
  res.json({err: err});
};