'use strict';
const express=require('express');
// const products=require('../lib/models/products/products-model');
// const categories=require('../lib/models/categories/categories-model');
const router = express.Router();
const getModel = require('../middleware/check');

router.param('model',getModel);




/**
* Module model
* @module router
*/



router.get('/:model', getmodel);
router.get('/:model/:id', getmodelById);
router.post('/:model', postmodel);
router.put('/:model/:id', updatemodel);
router.delete('/:model/:id', deletemodel);

/**
 * Function getmodel
 * @param   req
 * @param   res
 * @param   next
 */


function getmodel(req,res,next){
  console.log('body get',req.body);
  req.model.get()
    .then((data)=>res.json(data))
    .catch(next);

  
}

/**
 * Function getmodelById
 * @param   req
 * @param   res
 * @param   next
 */

  
function getmodelById(req,res,next){
  req.model.get(req.params.id)
    .then((data)=>res.json(data))
    .catch(next);
}
  

/**
 * Function postmodel
 * @param   req
 * @param   res
 * @param   next
 */

function postmodel(req,res,next){
  let{category,name,display_name,description}=req.body;
  let record={category,name,display_name,description};
  // console.log('body',req.record);
  req.model.create(req.record)
    .then(res.status(201).json(record))
    .catch(next);
}


/**
 * Function updatemodel
 * @param   req
 * @param   res
 * @param   next
 */

  
function updatemodel(req,res,next){
  let{category,name,display_name,description}=req.body;
  let record={category,name,display_name,description};
  req.model.update(req.params.id,req.record)
    .then(res.status(201).json(record))
    .catch(next);
}
  

/**
 * Function deletemodel
 * @param   req
 * @param   res
 * @param   next
 */

function deletemodel(req,res,next){
  req.model.delete(req.params.id)
    .then(res.status(201).json('Sorry for your model'))
    .catch(next);
}
  

module.exports=router;
