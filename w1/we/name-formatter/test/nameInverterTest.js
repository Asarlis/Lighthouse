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


});