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
  d[splits] += '.';
  return d[splits];
}

export default get_text_window;
