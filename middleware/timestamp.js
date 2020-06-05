'use strict';

/**
 * (Middleware) will generat a timestamp
 * @module timestamp
 */

/**
* Input 
* @param req - request
* @param res  - response
* @param next - next
*/
module.exports = (req, res, next) => {
  req.requestTime=new Date();
  next();
};