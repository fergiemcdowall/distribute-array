module.exports = function (arr, nodes) {
  var _ = require('lodash');
  var newArrays = _.fill(Array(nodes), []);
  var chunks = _.chunk(arr, Math.floor(arr.length / nodes));
  for (var i = 0; i < chunks.length; i++)
    newArrays[i] = chunks[i];
  if (chunks.length > nodes) {
    var remainder = _.flatten(chunks.slice(nodes, chunks.length))
    for (var i = 0; i < remainder.length; i++)
      newArrays[i] = newArrays[i].concat(remainder[i]);
  }
  return newArrays.slice(0, nodes);
}


