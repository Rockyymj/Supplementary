var Login = require('../src/containers/Login.js');
var expect = require('chai').expect;

describe('this is a test about mocha ', function() {
  it('it will login success', function() {
    expect(Login(1, 1)).to.be.equal(2);
  });
  it('it will login success', function() {
    expect(Login(1, 2)).to.be.equal(3);
  });

});
