var hdate = require('./humandate.js');
var assert = require('assert');

describe('relativeTime', function () {
  describe('future', function () {
    it('should work with an integer', function () {
      assert.equal(hdate.relativeTime(122158874), '3 years, 318 days, 21 hours, 1 minute, 14 seconds from now');
    });
    it('should work with a string', function () {
      assert.equal(typeof hdate.relativeTime('8-16-2020'), 'string');
    });
    it('should work with a date object', function () {
      assert.equal(typeof hdate.relativeTime(new Date('8-16-2020')), 'string');
    });
  });
  describe('past', function () {
    it('should work with an integer', function () {
      assert.equal(hdate.relativeTime(-122158874), '3 years, 318 days, 21 hours, 1 minute, 14 seconds ago');
    });
    it('should work with a string', function () {
      assert.equal(typeof hdate.relativeTime('8-16-1987'), 'string');
    });
    it('should work with a date object', function () {
      assert.equal(typeof hdate.relativeTime(new Date('8-16-1987')), 'string');
    });
  });
  describe('options', function () {
    it('should work with an optional future suffix', function () {
      assert.equal(hdate.relativeTime(4, { futureSuffix: 'in the future' }), '4 seconds in the future');
    });
    it('should work with an optional past suffix', function () {
      assert.equal(hdate.relativeTime(-4, { pastSuffix: 'in the past' }), '4 seconds in the past');
    });
    it('should work returning an object', function () {
      assert.equal(typeof hdate.relativeTime(-4, { returnObject: true }), 'object');
    });
  });
});

describe('prettyPrint', function () {
  describe('future', function () {
    it('should work with a string', function () {
      assert.equal(hdate.prettyPrint('8-16-2020'), 'August 16th, 2020');
    });
    it('should work with a date object', function () {
      assert.equal(hdate.prettyPrint(new Date('8-16-2020')), 'August 16th, 2020');
    });
  });
  describe('past', function () {
    it('should work with a string', function () {
      assert.equal(hdate.prettyPrint('8-16-1987'), 'August 16th, 1987');
    });
    it('should work with a date object', function () {
      assert.equal(hdate.prettyPrint(new Date('8-16-1987')), 'August 16th, 1987');
    });
  });
  describe('options', function () {
    it('should work when showing time', function () {
      var timestamp = hdate.toUTC(new Date(1416448704578));
      assert.equal(hdate.prettyPrint(timestamp, { showTime: true }), 'November 20th, 2014 at 1:58 am');
    });
  });
});

describe('monthName', function () {
  it('should work with an integer', function () {
    assert.equal(hdate.monthName(8), 'August');
  });
  it('should work with a string', function () {
    assert.equal(hdate.monthName('5-22-2012'), 'May');
  });
  it('should work with a date object', function () {
    assert.equal(hdate.monthName(new Date('7-4-2012')), 'July');
  });
});

describe('toUTC', function () {
  it('should work with nothing', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC()), '[object Date]');
  });
  it('should work with a string', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC('5-22-2012')), '[object Date]');
  });
  it('should work with a date object', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC(new Date('7-4-2012'))), '[object Date]');
  });
  it('should work with a timestamp', function () {
    assert.equal(Object.prototype.toString.call(hdate.toUTC(1000000000000)), '[object Date]');
  });
});
