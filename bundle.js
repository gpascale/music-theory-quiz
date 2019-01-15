'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var teoria = require('teoria');

const MajorKeys = [ 'C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G' ];
const MinorKeys = [ 'a', 'd', 'g', 'c', 'f', 'bb', 'eb', 'g#', 'c#', 'f#', 'b', 'e' ];
const Keys = [ ...exports.MajorKeys, ...exports.MinorKeys ];

const Degrees = [
  { name: 'b2', interval: 'm2', alternateNames: ['b9'] },
  { name: '2', interval: 'M2', alternateNames: ['9'] },
  { name: '#9', interval: 'A2' },
  { name: 'b3', interval: 'm3' },
  { name: '3', interval: 'M3' },
  { name: '4', interval: 'P4', alternateNames: ['11'] },
  { name: '#4', interval: 'A4', alternateNames: ['#11'] },
  { name: 'b5', interval: 'd5' },
  { name: '5', interval: 'P5' },
  { name: '#5', interval: 'A5' },
  { name: 'b6', interval: 'm6', alternateNames: ['b13'] },
  { name: '6', interval: 'M6', alternateNames: ['13'] },
  { name: 'bb7', interval: 'd7' },
  { name: 'b7', interval: 'm7' },
  { name: '7', interval: 'M7' }
];

const ChordQualities = [
  'maj', 'maj6', 'maj7', 'maj7#11', 'maj7#5', 'maj9',
  'min', 'min7', 'min6', 'min9', 'min11',
  '7', '7b9', '7#5', '7b13', '9', '13', 'alt',
  'm7b5',
  'dim', 'dim7'
];

const BasicChordQualities = [
  'maj', 'min', 'dim', 'aug'
];

const BasicSeventhChordQualities = [
  'maj7', 'min7', '7', 'm7b5', 'dim7'
];

const ChordScales = {
  MajorScale: [ 'maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5' ]
};

const QuestionTypes = [
  'ChordSpelling',
  'Degree',
  'Interval'
];

var constants = /*#__PURE__*/Object.freeze({
  MajorKeys: MajorKeys,
  MinorKeys: MinorKeys,
  Keys: Keys,
  Degrees: Degrees,
  ChordQualities: ChordQualities,
  BasicChordQualities: BasicChordQualities,
  BasicSeventhChordQualities: BasicSeventhChordQualities,
  ChordScales: ChordScales,
  QuestionTypes: QuestionTypes
});

const applyDefaults = function(obj, defaults) {
  return Object.assign({ }, defaults, obj || { });
};

const DegreeByName = function(name) {
  const matches = Degrees.filter(d => name == d.name || d.alternateNames && name in d.alternateNames);
  if (matches.length)
    return matches[0];
  throw new Error('Invalid degree name: ', name);
};

const noteFriendlyName = function(note) {
  return note.name().toUpperCase() + note.accidental();
};

const articleify = function(followingText, appendFollowingText=true) {
  if (!followingText)
    return '';

  const nextWord = followingText.split(/\s/)[0];
  switch (nextWord.toLowerCase()) {
    case 'a': case 'e': case 'f':
      return 'an' + (appendFollowingText ? (' ' + followingText) : '');
    default:
      return 'a' + (appendFollowingText ? (' ' + followingText) : '');
  }
};

var util = { applyDefaults, DegreeByName, noteFriendlyName, articleify };

const Chance = require('chance');
const chance = new Chance();

const defaults = {
  keys: MajorKeys,
  degrees: Degrees.map(degree => degree.name)
};

class DegreeQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults);
  }

  setDegrees(degrees) {
    this.options.degrees = [...degrees];
  }

  setKeys(keys) {
    this.options.keys = [...keys];
  }

  generate() {
    // Choose a random key and degree
    if (!this.options.keys || !this.options.keys.length)
      throw('must provide at least one key');
    if (!this.options.degrees || !this.options.degrees.length)
      throw('must provide at least one degree');
    var key = chance.pickone(this.options.keys);
    var degree = util.DegreeByName(chance.pickone(this.options.degrees));

    // Determine the starting note and ending note and form the question
    var startingNote = teoria.Note.fromString(key);
    var endingNote = startingNote.interval(degree.interval);
    return {
      questionText: 'What is ' + degree.name + ' of ' + key + '?\n',
      answer: endingNote.name().toUpperCase() + endingNote.accidental()
    };
  }
}

const Chance$1 = require('chance');
const chance$1 = new Chance$1();

// Chord spelling questions can be generated in one of two ways, or "strategys".
// - In the diatonic strategy, a list of keys is selected and chords are chosen
//   which are diatonic to those keys (or possibly common extensions to the key)
// - In the verbose strategy (not yet implemented), the caller selects a complete
//   list of root notes and possible chord types which are used to generate the chords.


const defaults$1 = {
  // Used in diatonic strategy
  keys: MajorKeys,
  // Used in verbose strategy
  chordQualities: Constants.BasicSeventhChordQualities,
  roots: MajorKeys,

  strategy: 'diatonic'
};

class ChordQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults$1);
  }

  setMode(mode) {
    this.options.mode = mode;
  }

  setKeys(keys) {
    this.options.keys = [...keys];
  }

  generate() {
    var chordQuality, answer;

    if (this.options.strategy == 'diatonic') {
      // Choose a random key and degree
      if (!this.options.keys || !this.options.keys.length)
        throw('must provide at least one key');
      var key = chance$1.pickone(this.options.keys);
      var step = chance$1.integer({ min: 1, max: 7 });
      var root = teoria.Note.fromString(key).scale('ionian').get(step);
      console.log(step + ' of ' + key + ' is ' + root.name());
      var chordQuality = ChordScales.MajorScale[step - 1];
      var chord = root.chord(chordQuality);
      var answer = chord.notes().map(note => util.noteFriendlyName(note)).join(', ');
    }
    else if (this.strategy == 'verbose') {
      throw 'verbose strategy not yet implemented';
    }
    else {
      throw 'unrecognized strategy - ' + this.strategy;
    }

    return {
      questionText: 'Spell ' + util.articleify(util.noteFriendlyName(root)) + ' ' + chordQuality + ' chord',
      answer: answer
    };
  }
}

const Chance$2 = require('chance');
const chance$2 = new Chance$2();

const defaults$2 = {
  keys: MajorKeys,
  intervals: Degrees.map(d => d.interval),
  degrees: Degrees
};

class IntervalQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults$2);
  }

  setIntervals(intervals) {
    this.options.intervals = [...intervals];
  }

  setKeys(keys) {
    this.options.keys = [...keys];
  }

  setDegrees(degrees) {
    this.options.degrees = [...degrees];
  }

  generate() {
    // Choose a random key and degree
    // console.log('generate, fuck');
    // console.log('keys, degrees, intervals', this.options);
    if (!this.options.keys || !this.options.keys.length)
      throw('must provide at least one key');
    //
    const key = chance$2.pickone(this.options.keys);
    const degree = chance$2.pickone(this.options.degrees);
    const startingNote = teoria.Note.fromString(key).interval(degree.interval);
    const interval = chance$2.pickone(this.options.intervals);
    const endingNote = startingNote.interval(interval);

    return {
      questionText: 'What is a ' + interval + ' above ' + startingNote + '?\n',
      answer: endingNote.name().toUpperCase() + endingNote.accidental()
    };
  }
}

exports.Constants = constants;
exports.DegreeQuestions = DegreeQuestions;
exports.ChordQuestions = ChordQuestions;
exports.IntervalQuestions = IntervalQuestions;
