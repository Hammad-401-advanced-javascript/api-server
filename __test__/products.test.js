'use strict';

const supergoose = require('@code-fellows/supergoose');
const productsTest= require('../lib/models/products/products-model');

let obj =     {
  name: 'test1',
  category : 'movie test',
  display_name: 'dis test',
  description: 'dec test',
};
  

describe(' Model for the products',()=>{
  it('can post() a product', ()=> {
    return productsTest.create(obj)
      .then(record => {
        Object.keys(obj ).forEach(key=> {
          expect(record[key]).toEqual(obj [key]);
        });
      });
  });

  it('can get() a product',()=>{
    return productsTest.get()
      .then(record=>{
        Object.keys(obj).forEach(key=>{
          expect(record[0][key]).toEqual(obj[key]);
        });
      });
  });

  it('can delete() a product',()=>{
    let id='5ed6910f0e959718769e3a5a';
    return productsTest.delete(id)
      .then(data=>{
        expect(data).toBeNull;
      });
  });

});