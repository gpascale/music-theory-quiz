const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import { noteFriendlyName, applyDefaults } from '../util';
import { MajorKeys, Degrees, Intervals } from '../constants';

const defaults = {
  keys: MajorKeys,
  intervals: Degrees.map(d => d.interval),
  degrees: Degrees
};

class IntervalQuestions {
  constructor(options) {
    this.options = applyDefaults(options, defaults);
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
    if (!this.options.keys || !this.options.keys.length)
      throw('must provide at least one key');
    //
    const key = chance.pickone(this.options.keys);
    const degree = chance.pickone(this.options.degrees);
    const interval = chance.pickone(this.options.intervals);

    const flip = chance.bool();
    let startingNote = Note.fromString(key).interval(degree.interval);
    let endingNote = startingNote.interval(interval);

    if (flip) {
      const tmp = startingNote;
      startingNote = endingNote;
      endingNote = tmp;
    }

    return {
      questionText: `What is a ${interval} ${flip ? 'below' : 'above'} ${noteFriendlyName(startingNote)}?`,
      answer: noteFriendlyName(endingNote)
    };
  }
}

export default IntervalQuestions;
