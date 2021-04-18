const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("should return true if an empty string returns an empty string", function (){
    const empty = "";
    const result = nameInverter(empty);
    assert.isTrue(result);
  });
  it("should return a single name when given a single name", function(){
    const single = "name";
    const result = nameInverter(single);
    assert.isTrue(result);
  });
  it ("should return a single name when passed a single name with extra spaces", function(){
    const name = "name ";
    const result = nameInverter(name);
    assert.isTrue(result);
  });
  it ("should return a last-name, first-name when passed a first-name and last-name", function(){
    const firstLast = "Sean Day";
    const result = nameInverter(firstLast);
    assert.isTrue(result);
  });
  

});