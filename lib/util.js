
exports.applyDefaults = function(obj, defaults) {
  return Object.assign({ }, defaults, obj || { });
}
