/* eslint-env mocha*/
const assert = require('assert');
const calculator = require('../index');

describe('calculator',() => {
    describe('add function',() => {
        it('adds numbers', () => {
            const result = calculator.add(1,1);
            assert.equal(result,2);
        });
    });

    describe('add function', () => {
        it('multiplies numbers',() => {
            const result = calculator.multiply(1,2);
            assert.equal(result,2);
        });
    });
});