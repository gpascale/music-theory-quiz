const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import util from './util';

const ALL_KEYS = [ 'c', 'f', 'bb', 'eb', 'ab', 'db', 'gb', 'b', 'e', 'a', 'd' ];
const ALL_DEGREES = [
 { name: 'b2', interval: 'm2' },
 { name: '2', interval: 'M2' },
 { name: '#9', interval: 'A2' },
 { name: 'b3', interval: 'm3' },
 { name: '3', interval: 'M3' },
 { name: '4', interval: 'P4' },
 { name: '#4', interval: 'A4' },
 { name: 'b5', interval: 'd5' },
 { name: '5', interval: 'P5' },
 { name: '#5', interval: 'A5' },
 { name: 'b6', interval: 'm6' },
 { name: '6', interval: 'M6' },
 { name: 'bb7', interval: 'd7' },
 { name: 'b7', interval: 'm7' },
 { name: '7', interval: 'M7' }
];

const defaults = {
  keys: ALL_KEYS,
  degrees: ALL_DEGREES
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
