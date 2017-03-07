const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import util from '../util';
import { Keys, Degrees } from '../constants';

const defaults = {
  keys: Keys,
  degrees: Degrees
};

class DegreeQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults);
  }

  generate() {
    var key = chance.pickone(this.options.keys);
    var degree = chance.pickone(this.options.degrees);
    var startingNote = Note.fromString(key);
    var endingNote = startingNote.interval(degree.interval);
    return {
      questionText: 'What is ' + degree.name + ' of ' + key + '?\n',
      answer: endingNote
    }
  }
}

export default DegreeQuestions;
