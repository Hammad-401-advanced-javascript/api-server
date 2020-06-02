'use strict';
const express=require('express');
const categories=require('../lib/models/categories/categories-model');  //categories.post().then()
const router=express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getCategoriesById);
router.post('/categories', postCategories);
router.put('/categories/:id', updateCategories);
router.delete('/categories/:id', deleteCategories);


function getCategories(req,res,next){
  categories.get()
    .then((data)=>res.json(data))
    .catch(next);  
}
  
function getCategoriesById(req,res,next){
  // console.log("here req",req.params.id);
  categories.get(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

  

  
function postCategories(req,res,next){
  let{name,display_name,description}=req.body;
  let record={name,display_name,description};
  categories.create(record)
    .then(res.status(201).json('Thank you for adding your category'))
    .catch(next);
  
}
  
function updateCategories(req,res,next){
  let{name,display_name,description}=req.body;
  let record={name,display_name,description};
  categories.update(req.params.id,record)
    .then(data=>res.status(201).json(data))
    .catch(next);
  // console.log('record',record);
  res.status(201).json('Thank you for update your category');  
}
  
function deleteCategories(req,res,next){
  categories.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports=router;