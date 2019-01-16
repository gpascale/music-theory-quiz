var assert = require('assert');
import DegreeQuestions from '../src/questions/degree-questions';
import util from '../src/util';

describe('util', function() {
  describe('#applyDefaults()', function() {
    it('basic case', function() {
      var obj = { a: 'custom value for a' };
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults(obj, defaults);
      var expected = { a: 'custom value for a', b: 'default value for b' };
      expect(actual).toEqual(expected);
    });
    it('obj is { }', function() {
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults({ }, defaults);
      expect(actual).toEqual(defaults);
    });
    it('obj is undefined', function() {
      var defaults  = { a: 'default value for a', b: 'default value for b' };
      var actual = util.applyDefaults(undefined, defaults);
      expect(actual).toEqual(defaults);
    });
    it('defaults is { }', function() {
      var obj = { a: 'custom value for a' };
      var actual = util.applyDefaults(obj, { });
      expect(actual).toEqual(obj);
    });
    it('defaults is undefined', function() {
      var obj = { a: 'custom value for a' };
      var actual = util.applyDefaults(obj, undefined);
      expect(actual).toEqual(obj);
    });
  });

  describe('articleify', function() {
    it('an case 1', function() {
      const text = 'F major 7 chord';
      var actual = util.articleify(text);
      var expected = 'an F major 7 chord';
      expect(actual).toBe(expected);
    });
    it('an case 2', function() {
      const text = 'A major 7 chord';
      var actual = util.articleify(text);
      var expected = 'an A major 7 chord';
      expect(actual).toBe(expected);
    });
    it('a case 1', function() {
      const text = 'G major 7 chord';
      var actual = util.articleify(text);
      var expected = 'a G major 7 chord';
      expect(actual).toBe(expected);
    });
    it('a case 1', function() {
      const text = 'big bad wolf';
      var actual = util.articleify(text);
      var expected = 'a big bad wolf';
      expect(actual).toBe(expected);
    });
    it('no following text', function() {
      const text = '';
      var actual = util.articleify(text);
      var expected = '';
      expect(actual).toBe(expected);
    });
    it('should be an but func doesn\'t know about it', function() {
      const text = 'eight ball';
      var actual = util.articleify(text);
      var expected = 'a eight ball';
      expect(actual).toBe(expected);
    });
  });
});
