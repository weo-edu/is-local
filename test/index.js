var expect = require('chai').expect;
var isLocal = require('../');

describe('isLocal', function() {
  it('should work', function() {
    expect(isLocal('http://www.google.com')).to.equal(false);
    expect(isLocal('https://www.google.com')).to.equal(false);
    expect(isLocal('HTTPS://www.google.com')).to.equal(false);
    expect(isLocal('HtTps://www.google.com')).to.equal(false);
    expect(isLocal('notARealProtocol://www.google.com')).to.equal(false);
    expect(isLocal('//www.google.com')).to.equal(false);
    expect(isLocal('/test')).to.equal(true);
    expect(isLocal('test')).to.equal(true);
    expect(isLocal('test/test')).to.equal(true);
  });
});