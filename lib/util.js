import _ from 'underscore';
import Constants from './constants';

exports.applyDefaults = function(obj, defaults) {
  return Object.assign({ }, defaults, obj || { });
}

exports.DegreeByName = function(name) {
  return _.find(Constants.Degrees, degree => degree.name == name || (degree.alternateNames && name in degree.alternateNames));
}
