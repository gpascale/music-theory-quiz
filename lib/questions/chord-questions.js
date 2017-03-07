import util from '../util';
import { Keys, Degrees } from '../constants';

const defaults = {
  keys: Keys,
};

class ChordQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults);
  }

  generate() {
    // var key = chance.pickone(this.options.keys);
    // var degree = chance.pickone(this.options.degrees);
    // var startingNote = Note.fromString(key);
    // var endingNote = startingNote.interval(degree.interval);
    return {
      questionText: 'Spell a blah',
      answer: 'blah'
    }
  }
}

export default ChordQuestions;