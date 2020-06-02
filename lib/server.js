'use strict';
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const productsRouter=require('../routes/products-router.js');
const categoriesRouter=require('../routes/categories-router.js');
const timestamp = require('../middleware/timestamp.js');
const loggerReq = require('../middleware/logger.js');
const serverError = require('../middleware/500.js');
const notFound = require('../middleware/404.js');
const app=express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1',productsRouter);
app.use('/api/v1',categoriesRouter);
app.use(timestamp);
app.use(loggerReq);


app.get('/', (req, res) => {
  res.status(200).send('Welcome to the main route');
});

app.use(notFound);
app.use(serverError);

module.exports={
  server:app,
  start:(port)=>{
    const PORT = port || process.env.PORT||3000;
    app.listen(PORT,()=>console.log(`listining on ${PORT}`));
  },
};