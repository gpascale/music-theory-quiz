const Chance = require('chance');
const chance = new Chance();
import { Note, Chord, Scale, Interval } from 'teoria';
import util from '../util';
import Constants, { Keys, Degrees, ChordScales } from '../constants';
import _ from 'underscore';

// Chord spelling questions can be generated in one of two ways, or "strategys".
// - In the diatonic strategy, a list of keys is selected and chords are chosen
//   which are diatonic to those keys (or possibly common extensions to the key)
// - In the verbose strategy (not yet implemented), the caller selects a complete
//   list of root notes and possible chord types which are used to generate the chords.


const defaults = {
  // Used in diatonic strategy
  keys: Keys,
  // Used in verbose strategy
  chordQualities: Constants.BasicSeventhChordQualities,
  roots: Keys,

  strategy: "diatonic"
};

class ChordQuestions {
  constructor(options) {
    this.options = util.applyDefaults(options, defaults);
  }

  setMode(mode) {
    this.options.mode = mode;
  }

  setKeys(keys) {
    this.options.keys = [...keys];
  }

  generate() {
    var chordQuality, answer;

    if (this.options.strategy == "diatonic") {
      // Choose a random key and degree
      if (!this.options.keys || !this.options.keys.length)
        throw("must provide at least one key");
      var key = chance.pickone(this.options.keys);
      var step = chance.integer({ min: 1, max: 7 });
      var root = Note.fromString(key).scale('ionian').get(step);
      console.log(step + ' of ' + key + ' is ' + root.name());
      var chordQuality = ChordScales.MajorScale[step - 1];
      var chord = root.chord(chordQuality);
      var answer = _.map(chord.notes(), (note) => util.noteFriendlyName(note)).join(', ');
    }
    else if (this.strategy == "verbose") {
      throw "verbose strategy not yet implemented";
    }
    else {
      throw "unrecognized strategy - " + this.strategy;
    }
  
    return {
      questionText: 'Spell a ' + util.noteFriendlyName(root) + ' ' + chordQuality + ' chord',
      answer: answer
    }
  }
}

export default ChordQuestions;