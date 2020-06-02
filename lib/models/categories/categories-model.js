'use strict';

const schemaCategories=require('./categories.schema');
const modelCategories=require('./categories.collection');

class Categories extends modelCategories{
  constructor(){
    super(schemaCategories);
  }
}

module.exports=new Categories();