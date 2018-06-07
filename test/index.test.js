const request = require('supertest');
const app = require('../server/app.js');

describe('Server get request testing', () => {
  test('Should receive a 200 status code when GET (/)', () => {
    return request(app).get('/')
      .then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('Should send back object with restaurant_id', () => {
    return request(app).get('/restaurant/34')
    .then(response =>{
      expect(response.text).toBe(JSON.stringify({ restaurant_id: '34' }));
    });
  }); 
});