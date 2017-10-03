import Constants from './constants';

export const applyDefaults = function(obj, defaults) {
  return Object.assign({ }, defaults, obj || { });
};

export const DegreeByName = function(name) {
  const matches = Constants.Degrees.filter(d => name == d.name || d.alternateNames && name in d.alternateNames);
  if (matches.length)
    return matches[0];
  throw new Error('Invalid degree name: ', name);
};

export const noteFriendlyName = function(note) {
  return note.name().toUpperCase() + note.accidental();
};

export const articleify = function(followingText, appendFollowingText=true) {
  if (!followingText)
    return '';

  const nextWord = followingText.split(/\s/)[0];
  switch (nextWord.toLowerCase()) {
    case 'a': case 'e': case 'f':
      return 'an' + (appendFollowingText ? (' ' + followingText) : '');
    default:
      return 'a' + (appendFollowingText ? (' ' + followingText) : '');
  }
};

export default { applyDefaults, DegreeByName, noteFriendlyName, articleify };
