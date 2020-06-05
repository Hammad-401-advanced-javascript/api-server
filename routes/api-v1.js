'use strict';
const express=require('express');
const products=require('../lib/models/products/products-model');
const categories=require('../lib/models/categories/categories-model');
const router = express.Router();

router.param('model',getModel);

function getModel(req, res,next){
  const model=req.params.model;
  switch(model){
  case 'products':
    req.model=products;
    next();
    return;
  case 'categories':
    req.model=categories;
    next();
    return;
  default:
    next('invalid');
    return;
  }
}


router.get('/:model', getmodel);
router.get('/:model/:id', getmodelById);
router.post('/:model', postmodel);
router.put('/:model/:id', updatemodel);
router.delete('/:model/:id', deletemodel);


function getmodel(req,res,next){
  console.log('body get',req.body);
  req.model.get()
    .then((data)=>res.json(data))
    .catch(next);

  
}
  
function getmodelById(req,res,next){
  req.model.get(req.params.id)
    .then((data)=>res.json(data))
    .catch(next);
}
  
function postmodel(req,res,next){
  // let{category,name,display_name,description}=req.body;
  // let record={category,name,display_name,description};
  console.log('body',req.body);
  req.model.create(req.body)
    .then(res.status(201).json('Thank you for adding your model'))
    .catch(next);
}
  
function updatemodel(req,res,next){
  // let{category,name,display_name,description}=req.body;
  // let record={category,name,display_name,description};
  req.model.update(req.params.id,req.body)
    .then(res.status(201).json('Thank you for update your model'))
    .catch(next);
}
  
function deletemodel(req,res,next){
  req.model.delete(req.params.id)
    .then(res.status(201).json('Sorry for your model'))
    .catch(next);
}
  

module.exports=router;
