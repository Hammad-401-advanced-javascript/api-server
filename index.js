'use strict';
require('dotenv').config();
const mongoose=require('mongoose');
const server =require('./lib/server');


mongoose.connect(process.env.MONGOD_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

server.start(process.env.PORT);