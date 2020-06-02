'use strict';
const schemaProducts=require('./products.schema');
const ModelProcuts=require('./products.collection');


class Products extends ModelProcuts{
  constructor(){
    super(schemaProducts);
  }
}

module.exports= new Products();