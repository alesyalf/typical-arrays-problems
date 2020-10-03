
exports.min = function min (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length === 0 || arguments.length === 0){
    return 0;
  }
  var min_array = 0;
  for (var i = 0; i < array.length; ++i){
    if (array[i] <= min_array){
      min_array = array[i];
    }
  }
  return min_array;
}

exports.max = function max (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length === 0 || arguments.length === 0){
    return 0;
  }
  var max_array = 0;
  for (var i = 0; i < array.length; ++i){
    if (array[i] >= max_array){
     max_array = array[i];
    }
  }
  return max_array;
}

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0;
  }
  if (array.length === 0 || arguments.length === 0){
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < array.length; ++i){
    sum = sum + array[i];
  }
  return sum / array.length;
}
