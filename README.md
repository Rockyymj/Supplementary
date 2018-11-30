# Supplementary

1. Install

Install Mocha in my laptop.
sudo npm install mocha
creat a file named test and also creat a javascript file under test. This JS file is my editor.

# Assert and Chai

var  foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); 
// without optional message
assert.typeOf(foo, 'string', 'foo is a string'); 
// with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

# TDD and BDD

TDD: test-driven Development is a core practice and technology in agile Development as well as a design methodology. TDD works by writing unit test case code before functional code is developed, which determines what product code needs to be written. The basic idea of TDD is to promote the whole development process through testing. However, test-driven development is not just a test work, but a quantitative process of requirement analysis, design and quality control. TDD first considers the use of requirements (object, function, process, interface, etc.), mainly to write a test case framework to design the process and interface of function, and the test framework can continuously verify.

BDD: Behavior Driven Development (BDD) is an agile software Development technique that encourages collaboration between developers, QA, and non-technical or business participants in a software project. Mainly from the user's needs, emphasis on system behavior. Originally named by Dan North in 2003, BDD includes extreme programming practices such as acceptance testing and customer test-driven, in response to test-driven development.
