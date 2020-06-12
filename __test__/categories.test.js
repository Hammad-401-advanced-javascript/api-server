'use strict';

const supergoose = require('@code-fellows/supergoose');
const categoriesTest= require('../lib/models/categories/categories-model');


let obj2 =     {
  name: 'test2',
  display_name: 'dis test2',
  description: 'dec test2',
};

describe(' Model for the categories',()=>{
  it('can post() a categories', ()=> {
    return categoriesTest.create(obj2)
      .then(record => {
        Object.keys(obj2).forEach(key=> {
          expect(record[key]).toEqual(obj2[key]);
        });
      });
  });

  it('can get() a categories',()=>{
    return categoriesTest.get()
      .then(record=>{
        Object.keys(obj2).forEach(key=>{
          expect(record[0][key]).toEqual(obj2[key]);
        });
      });
  });

  // it('can update() category', ()=> {
  //   let id='5ed67e91d04792140679c3e9';
  //   return categoriesTest.update(id,obj2)
  //     .then(result => {
  //       Object.keys(obj2).forEach(key=> {
  //         expect(result[key]).toEqual(obj2[key]);
  //       });
  //     });
  // });

  it('can delete() a categories',()=>{
    let id='5ed6910f0e959718769e3a5a';
    return categoriesTest.delete(id)
      .then(data=>{
        expect(data).toBeNull;
      });
  });

});