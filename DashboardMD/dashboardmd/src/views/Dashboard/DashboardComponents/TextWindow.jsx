const get_text_window = (data, cur_time, max_time, window_length) => {
  var d = data.split(' ')
  var l = d.length;
  var splits = Math.floor(d.length * cur_time / max_time);
  console.log(l, cur_time, max_time);
  var left = splits - 4;
  var right = splits;
  // console.log(splits, left, right);
  if (left < 0){
    left = 0;
  }
  d[left] = '<b>' + d[left];
  d[right] += '</b>';
  // console.log(d);
  return d
}

export default get_text_window;
