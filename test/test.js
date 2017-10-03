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

  describe('articleify', function() {
    it('an case 1', function() {
      const text = 'F major 7 chord';
      var actual = util.articleify(text);
      var expected = 'an F major 7 chord';
      assert.equal(actual, expected);
    });
    it('an case 2', function() {
      const text = 'A major 7 chord';
      var actual = util.articleify(text);
      var expected = 'an A major 7 chord';
      assert.equal(actual, expected);
    });
    it('a case 1', function() {
      const text = 'G major 7 chord';
      var actual = util.articleify(text);
      var expected = 'a G major 7 chord';
      assert.equal(actual, expected);
    });
    it('a case 1', function() {
      const text = 'big bad wolf';
      var actual = util.articleify(text);
      var expected = 'a big bad wolf';
      assert.equal(actual, expected);
    });
    it('no following text', function() {
      const text = '';
      var actual = util.articleify(text);
      var expected = '';
      assert.equal(actual, expected);
    });
    it('should be an but func doesn\'t know about it', function() {
      const text = 'eight ball';
      var actual = util.articleify(text);
      var expected = 'a eight ball';
      assert.equal(actual, expected);
    });
  });
});

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