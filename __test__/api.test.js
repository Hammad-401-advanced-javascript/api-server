'use strict';
const supergoose = require('@code-fellows/supergoose');
const {server} = require('../lib/server');
const supertest = require('supertest');
const firstFake = supertest(server);
// const secondFake = supergoose(server);



describe('server', ()=>{
  it('should respond with 500', ()=> {
        
    return firstFake.get('/bad')
      .then(results=> {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });

  it('should respond 404 of an invalid route',() => {

    return firstFake
      .get('/anything')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });

  it('should respond properly /', ()=> {
    return firstFake
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });





  // it('it can get() category ', ()=> {
  //   let obj = {
  //     'name': 'test',
  //     'display_name': 'testttt',
  //     'description': 'The latest tests',
  //   };
  //   return secondFake
  //     .post('/api/v1/categories') 
  //     .send(obj)
  //     .then(data => {
  //       return secondFake.get('/api/v1/categories')
  //         .then(result => {
  //           Object.keys(obj).forEach(key=> {
  //             expect(result.body[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });

 

});