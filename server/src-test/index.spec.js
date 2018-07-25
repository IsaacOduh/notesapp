/**
 * Reference article :https://semaphoreci.com/community/tutorials/a-tdd-approach-to-building-a-todo-api-using-node-js-and-mongodb
 * https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
 */

import { expect } from 'chai';

import request from 'supertest';

import app from '..';

import notesdb from '../models/note';


describe('Notes Controller', () => {
  let datalength;

  beforeEach(() => {
    // notes = notesdb;
    datalength = notesdb.length;
  });

  describe('Get all notes', () => {
    it('should return all notes', (done) => {
      request(app)
        .get('/api/v1/notes')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.notes.length).to.equal(datalength);
          expect(res.body.notes[0].title).to.equal('Note 1');
          done();
        });
    });
  });
});

// import chai from 'chai';

// import chaiHttp from 'chai-http';

// import app from '../index';

// import notesdb from '../models/note';

// require('babel-register')({ ignore: false });

// const expect = chai.expect();
// chai.use(chaiHttp);

// describe('Notes Controller', () => {
// //   let notes;
//   let datalength;

//   beforeEach(() => {
//     // notes = notesdb;
//     datalength = notesdb.length;
//   });

//   describe('Get all notes', () => {
//     it('should return all notes', (done) => {
//       chai.request(app)
//         .get('/api/v1/notes')
//         .end((err, res) => {
//           expect(res.status).to.equal(200);
//           expect(res.body.notes.length).to.equal(datalength);
//           expect(res.body.notes[0].title).to.equal('Note 1');
//           done();
//         });
//     });
//   });
// });
