'use strict';

/**
 * (Middleware) set the response status to 404 and send an error
 * @module 404
 */

/**
 * Input 
 * @param req - request
 * @param res - response
 * @param next - next
 */


module.exports=(req,res,next)=>{
  res.status(404);
  res.statusMessage='yourdata not found';
  res.json({error:'Not Found'});
};