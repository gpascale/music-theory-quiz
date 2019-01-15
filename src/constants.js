
export const MajorKeys = [ 'C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'B', 'E', 'A', 'D', 'G' ];
export const MinorKeys = [ 'a', 'd', 'g', 'c', 'f', 'bb', 'eb', 'g#', 'c#', 'f#', 'b', 'e' ];
export const Keys = [ MajorKeys, MinorKeys ];

export const Degrees = [
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

export const ChordQualities = [
  'maj', 'maj6', 'maj7', 'maj7#11', 'maj7#5', 'maj9',
  'min', 'min7', 'min6', 'min9', 'min11',
  '7', '7b9', '7#5', '7b13', '9', '13', 'alt',
  'm7b5',
  'dim', 'dim7'
];

export const BasicChordQualities = [
  'maj', 'min', 'dim', 'aug'
];

export const BasicSeventhChordQualities = [
  'maj7', 'min7', '7', 'm7b5', 'dim7'
];

export const ChordScales = {
  MajorScale: [ 'maj7', 'min7', 'min7', 'maj7', '7', 'min7', 'min7b5' ]
};

export const QuestionTypes = [
  'ChordSpelling',
  'Degree',
  'Interval'
];
