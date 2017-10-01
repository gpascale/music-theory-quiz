import util from './util';
import { Note, Chord, Scale, Interval } from 'teoria';

class Question {
  constructor(options) {
    options = util.applyDefaults(options, { });
    options.inputTypes = [ Chord ],
    options.outputTypes = [ Note, Note, Note, Note ];
  }

  generate() {
    return {
      inputs: [ new Note('C') ],
      outputs: [ new Note('C'), new Note('E'), new Note('G'), new Note('B') ]
    }
  }
}

export default Question;
