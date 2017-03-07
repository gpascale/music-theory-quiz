var assert = require('assert');
import DegreeQuestions from '../lib/questions/degree-questions';
import util from '../lib/util';

describe('util', function() { 
  describe('#applyDefaults()', function() {
    it('basic case', function() {
      var obj = { a: 'custom value for a' };
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults(obj, defaults);
      var expected = { a: 'custom value for a', b: 'default value for b' };
      assert.deepEqual(actual, expected);
    });
    it('obj is { }', function() {
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults({ }, defaults);
      assert.deepEqual(actual, defaults);
    });
    it('obj is undefined', function() {
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults(undefined, defaults);
      assert.deepEqual(actual, defaults);
    });
    it('defaults is { }', function() {
      var obj = { a: 'custom value for a' };
      var actual = util.applyDefaults(obj, { });
      assert.deepEqual(actual, obj);
    });
    it('defaults is undefined', function() {
      var obj = { a: 'custom value for a' };
      var actual = util.applyDefaults(obj, undefined);
      assert.deepEqual(actual, obj);
    });
  });
})

// describe('DegreeQuestion', function() {
//   describe('#generate()', function() {
//     it('question/answer should be blah', function() {
//       var q = new DegreeQuestion({ key: 'C' }).generate();
//       console.dir(q);
//       assert.equal(q.question, "What is #11 of C?");
//       assert.equal(q.answer, "F#");
//     });
//   });
// });