const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("should return true if an empty string returns an empty string", function (){
    const empty = "";
    const expectedOutput = "";
    assert.equal(nameInverter(empty), expectedOutput);
  });
  it("should return a single name when given a single name", function(){
    const single = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(single), expectedOutput);
  });
  it ("should return a single name when passed a single name with extra spaces", function(){
    const name = "name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it ("should return a last-name, first-name when passed a first-name and last-name", function(){
    const firstLast = "Sean Day";
    const expecteOutput = "Day, Sean";
    assert.equal(nameInverter(firstLast), expecteOutput);
  });
  it("should return a last-name, first-name when passed a first-name and last-name with extra white space around the names", function(){
    const name = " Sean Day";
    const expectedOutput = "Day, Sean";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it("should return '' when passed just an honorific", function(){
    const name = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it("should return honorific first_name when passed an honorific first-name", function (){
    const name = "Dr. Sean";
    const expectedOutput = "Dr. Sean";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it("should return honorific last-name, first_name when passed an honorific first-name and last-name", function (){
    const name = "Dr. Sean Day";
    const expectedOutput = "Dr. Day, Sean";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it("should return honorific last-name, first_name when passed an honorific first-name and last-name with spaces around it", function (){
    const name = "Dr. Sean Day ";
    const expectedOutput = "Dr. Day, Sean";
    assert.equal(nameInverter(name), expectedOutput);
  });
  it("should throw an error when undefined", function (){
    const name = undefined;
    const expectedOutput = Error('Error')
    assert.equal(nameInverter(name), expectedOutput);
  });


});