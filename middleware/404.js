'use strict';

module.exports=(req,res)=>{
  res.status(404);
  res.statusMessage='yourdata not found';
  res.json({error:'Not Found'});
};