const get_text_window = (data, cur_time, max_time, window_length) => {
  var d = data.split(/[\.]+/);
  for (var i = 0; i < d.length; i++) {
    if (d[i] === ''){
      d.splice(i, 1);
      i -= 1;
    }
  }
  var l = d.length;
  var splits = Math.ceil(l * cur_time / max_time);
  if (splits >= d.length){
    splits = d.length - 1
  }
  var left = splits - 2;
  if (left < 0){
    left = 0;
  }
  var right = splits + 1;
  for (var i = 0; i < right; i++){
    d[i] += '.';
  }

  return d.slice(left, right);
}

export default get_text_window;
