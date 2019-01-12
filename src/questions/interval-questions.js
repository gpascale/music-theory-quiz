const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import util from '../util';
import { MajorKeys, Degrees, Intervals } from '../constants';

const defaults = {
  keys: MajorKeys,
  intervals: Degrees.map(d => d.interval),
  degrees: Degrees
};

class IntervalQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults);
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
    const key = chance.pickone(this.options.keys);
    const degree = chance.pickone(this.options.degrees);
    const startingNote = Note.fromString(key).interval(degree.interval);
    const interval = chance.pickone(this.options.intervals);
    const endingNote = startingNote.interval(interval);

    return {
      questionText: 'What is a ' + interval + ' above ' + startingNote + '?\n',
      answer: endingNote.name().toUpperCase() + endingNote.accidental()
    };
  }
}

export default IntervalQuestions;
