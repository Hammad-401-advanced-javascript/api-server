'use strict';
'use strict';

const timestamp = require('../middleware/timestamp.js');
const loggerReq = require('../middleware/logger.js');
const serverError = require('../middleware/500.js');
const notFound = require('../middleware/404.js');


const express=require('express');
const app=express();
app.use(express.json());
app.use(timestamp);
app.use(loggerReq);


app.get('/', (req, res) => {
  res.status(200).send('Welcome to the main route');
});

// Categories routes
app.get('/categories', getCategories);
app.get('/categories/:id', getCategoriesById);
app.post('/categories', postCategories);
app.put('/categories/:id', updateCategories);
app.delete('/categories/:id', deleteCategories);

// products routes
app.get('/products', getProducts);
app.get('/products/:id', getProductsById);
app.post('/products', postProducts);
app.put('/products/:id', updateProducts);
app.delete('/products/:id', deleteProducts);




// my data from the lab-06
let myData={
  'categories': [
    {
      'id':1,
      'category': 'War',
      'name': 'in the past',
      'display_name': 'Top gun 1',
      'description': '23 Dec 2020',
    },
    {
      'id':2,
      'category': 'Romantic',
      'name': 'in the past',
      'display_name': 'my Day',
      'description': '23 Dec 2015',
    },
  ],
  'products': [
    {
      'id': 3,
      'category': 'Action',
      'name': 'best movie',
      'display_name': 'Top gun 2',
      'description': '1 Dec 2020',
    },
    {
      'id': 4,
      'category': 'Drama',
      'name': 'not agood movie',
      'display_name': 'my Day',
      'description': '23 Dec 2010',
    },
  ],
};



// categories functions
function getCategories(req,res){
  res.status(200).json(myData.categories);

}

function getCategoriesById(req,res){
  let id=req.params.id - 1;
  res.status(200).json(myData.categories[id]);

}

function postCategories(req,res){
  let data=req.body;
  myData.categories.push(data);
  res.status(201).json(myData.categories);

}

function updateCategories(req,res){
  let data=req.body;
  let id=req.params.id - 1;
  myData.categories[id]=data;
  res.status(201).json(myData.categories);

}

function deleteCategories(req,res){
  let id = req.params.id - 1;
  myData.categories.splice(id, 1);
  res.status(200).json(myData.categories);
}


// products functions
function getProducts(req,res){
  res.status(200).json(myData);

}

function getProductsById(req,res){
  let id = req.params.id - 1;
  res.status(200).json(myData[id]);
}

function postProducts(req,res){
  let data = req.body;
  myData.push(data);
  res.status(201).json(myData);
}

function updateProducts(req,res){
  let data = req.body;
  let id = req.params.id - 1;
  myData[id] = data;
  res.status(201).json(myData);
}

function deleteProducts(req,res){
  let id = req.params.id - 1;
  myData.splice(id, 1);
  res.status(200).json(myData);
}



app.use(notFound);
app.use(serverError);


module.exports={
  server:app,
  start:(port)=>{
    const PORT = port || process.env.PORT||3000;
    app.listen(PORT,()=>console.log(`listining on ${PORT}`));
  },
};