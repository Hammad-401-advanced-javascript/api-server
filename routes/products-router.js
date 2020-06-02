'use strict';
const express=require('express');
const products=require('../lib/models/products/products-model'); 
const router=express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductsById);
router.post('/products', postProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts);


function getProducts(req,res,next){
  products.get()
    .then((data)=>res.json(data))
    .catch(next);

  
}
  
function getProductsById(req,res,next){
  products.get(req.params.id)
    .then((data)=>res.json(data))
    .catch(next);
}
  
function postProducts(req,res,next){
  let{category,name,display_name,description}=req.body;
  let record={category,name,display_name,description};
  products.create(record)
    .then(res.status(201).json('Thank you for adding your products'))
    .catch(next);
}
  
function updateProducts(req,res,next){
  let{category,name,display_name,description}=req.body;
  let record={category,name,display_name,description};
  products.update(req.params.id,record)
    .then(res.status(201).json('Thank you for update your products'))
    .catch(next);
}
  
function deleteProducts(req,res,next){
  products.delete(req.params.id)
    .then(res.status(201).json('Sorry for your products'))
    .catch(next);
}
  

module.exports=router;
