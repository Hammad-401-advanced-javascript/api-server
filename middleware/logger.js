'use strict';
/**
 * (Middleware) will console log the requested path,method and time
 * @module logger
 */

/**
* Input 
* @param req - request
* @param res  - response
* @param next - next
*/
module.exports = (req, res, next) => {
  console.log('logger request is =>', req.method, req.path,req.requestTime);
  next();
};