const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import util from '../util';
import { MajorKeys, Degrees } from '../constants';

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
    var startingNote = Note.fromString(key);
    var endingNote = startingNote.interval(degree.interval);
    return {
      questionText: 'What is ' + degree.name + ' of ' + key + '?\n',
      answer: endingNote.name().toUpperCase() + endingNote.accidental()
    };
  }
}

export default DegreeQuestions;
