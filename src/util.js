import Constants from './constants';

exports.applyDefaults = function(obj, defaults) {
  return Object.assign({ }, defaults, obj || { });
};

exports.DegreeByName = function(name) {
  const matches = Constants.Degrees.filter(d => name == d.name || d.alternateNames && name in d.alternateNames);
  if (matches.length)
    return matches[0];
  throw new Error('Invalid degree name: ', name);
};

exports.noteFriendlyName = function(note) {
  return note.name().toUpperCase() + note.accidental();
};
