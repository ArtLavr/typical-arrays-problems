   
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (previous, current) => Math.min(previous, current) );
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (previous, current) => Math.max(previous, current) );
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  return array.reduce( (ammount, i) => ammount + i ) / array.length;
}